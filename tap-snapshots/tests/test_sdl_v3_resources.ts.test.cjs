/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`tests/test_sdl_v3_resources.ts TAP SDL: Create v3 Resource Groups > Groups matches expected result 1`] = `
Array [
  Object {
    "name": "westcoast",
    "requirements": Object {
      "attributes": Array [
        Object {
          "key": "foo",
          "value": "bar",
        },
        Object {
          "key": "region",
          "value": "us-west",
        },
      ],
      "signed_by": Object {
        "all_of": Array [
          3,
          4,
        ],
        "any_of": Array [
          1,
          2,
        ],
      },
    },
    "resources": Array [
      Object {
        "count": 2,
        "price": Object {
          "amount": "50",
          "denom": "uakt",
        },
        "resource": Object {
          "cpu": Object {
            "attributes": undefined,
            "units": Object {
              "val": Uint8Array [
                49,
                48,
                48,
              ],
            },
          },
          "endpoints": Array [
            Object {
              "sequence_number": 0,
            },
            Object {
              "kind": 1,
              "sequence_number": 0,
            },
          ],
          "gpu": Object {
            "attributes": Array [
              Object {
                "key": "vendor/nvidia/model/a100",
                "value": "true",
              },
            ],
            "units": Object {
              "val": Uint8Array [
                49,
              ],
            },
          },
          "id": 1,
          "memory": Object {
            "attributes": undefined,
            "quantity": Object {
              "val": Uint8Array [
                49,
                51,
                52,
                50,
                49,
                55,
                55,
                50,
                56,
              ],
            },
          },
          "storage": Array [
            Object {
              "attributes": undefined,
              "name": "default",
              "quantity": Object {
                "val": Uint8Array [
                  49,
                  48,
                  55,
                  51,
                  55,
                  52,
                  49,
                  56,
                  50,
                  52,
                ],
              },
            },
          ],
        },
      },
    ],
  },
]
`
