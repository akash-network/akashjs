API_DIR=$1
PROTO_PATH="$1/proto/node"

echo "Generating protobuf files for ${PROTO_PATH}"

SRC_PATHS=$(find ${PROTO_PATH} -name "*.proto")
OUTPUT_DIR="./src/protobuf"
LOG_FILE="./generate.log"

if [ ! -d ${PROTO_PATH} ]; then
    echo "Unable to locate definitions directory: ${PROTO_PATH}"
    exit 1
fi

echo "Generating new definitions in ${OUTPUT_DIR}"
if protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    -I="${API_DIR}/vendor/github.com/gogo/protobuf" \
    -I="${API_DIR}/vendor/github.com/cosmos/cosmos-sdk/third_party/proto" \
    -I="${API_DIR}/vendor/github.com/cosmos/cosmos-sdk/proto" \
    --proto_path=${PROTO_PATH} \
    --ts_proto_out=${OUTPUT_DIR} \
    --ts_proto_opt=esModuleInterop=true,forceLong=long,outputTypeRegistry=true \
    ${SRC_PATHS}; then
    echo "ok";
else
    echo "Unable to regenerate protobuf files: error below"
    cat ${LOG_FILE}
    rm ${LOG_FILE}
fi