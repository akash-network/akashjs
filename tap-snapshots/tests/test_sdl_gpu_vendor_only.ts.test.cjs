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
  73,
  75,
  183,
  106,
  215,
  92,
  49,
  231,
  113,
  229,
  48,
  68,
  151,
  2,
  216,
  86,
  65,
  98,
  150,
  237,
  255,
  225,
  213,
  251,
  247,
  129,
  249,
  17,
  249,
  32,
  143,
  196,
]
`
