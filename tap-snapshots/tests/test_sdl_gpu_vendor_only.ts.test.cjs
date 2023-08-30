/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`tests/test_sdl_gpu_vendor_only.ts TAP SDL: GPU Manifest > Manifest matches expected result 1`] = `
Array [
  Object {
    "name": "westcoast",
    "services": Array [
      Object {
        "args": null,
        "command": null,
        "count": 2,
        "env": null,
        "expose": Array [
          Object {
            "endpointSequenceNumber": 0,
            "externalPort": 0,
            "global": true,
            "hosts": Array [
              "ahostname.com",
            ],
            "httpOptions": Object {
              "maxBodySize": 1048576,
              "nextCases": Array [
                "error",
                "timeout",
              ],
              "nextTimeout": 0,
              "nextTries": 3,
              "readTimeout": 60000,
              "sendTimeout": 60000,
            },
            "ip": "",
            "port": 80,
            "proto": "TCP",
            "service": "",
          },
          Object {
            "endpointSequenceNumber": 0,
            "externalPort": 0,
            "global": true,
            "hosts": null,
            "httpOptions": Object {
              "maxBodySize": 1048576,
              "nextCases": Array [
                "error",
                "timeout",
              ],
              "nextTimeout": 0,
              "nextTries": 3,
              "readTimeout": 60000,
              "sendTimeout": 60000,
            },
            "ip": "",
            "port": 12345,
            "proto": "UDP",
            "service": "",
          },
        ],
        "image": "nginx",
        "name": "web",
        "params": null,
        "resources": Object {
          "cpu": Object {
            "units": Object {
              "val": "100",
            },
          },
          "endpoints": null,
          "gpu": Object {
            "attributes": Array [
              Object {
                "key": "vendor/nvidia/model/*",
                "value": "true",
              },
            ],
            "units": Object {
              "val": 1,
            },
          },
          "id": 1,
          "memory": Object {
            "size": Object {
              "val": 134217728,
            },
          },
          "storage": Array [
            Object {
              "name": "default",
              "size": Object {
                "val": 1073741824,
              },
            },
          ],
        },
      },
    ],
  },
]
`

exports[`tests/test_sdl_gpu_vendor_only.ts TAP SDL: GPU Version > Manifest version matches expected result 1`] = `
Uint8Array [
  239,
  191,
  154,
  105,
  18,
  178,
  164,
  147,
  168,
  67,
  206,
  158,
  182,
  203,
  219,
  142,
  35,
  29,
  66,
  24,
  64,
  176,
  22,
  122,
  224,
  146,
  113,
  130,
  81,
  41,
  135,
  179,
]
`
