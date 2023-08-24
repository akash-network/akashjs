/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`tests/test_sdl_ip_lease.ts TAP SDL: IP Lease Manifest > Manifest matches expected result 1`] = `
Array [
  Object {
    "Name": "dcloud",
    "Services": Array [
      Object {
        "Args": null,
        "Command": null,
        "Count": 1,
        "Env": null,
        "Expose": Array [
          Object {
            "EndpointSequenceNumber": 1,
            "ExternalPort": 80,
            "Global": true,
            "Hosts": null,
            "HTTPOptions": Object {
              "MaxBodySize": 1048576,
              "NextCases": Array [
                "error",
                "timeout",
              ],
              "NextTimeout": 0,
              "NextTries": 3,
              "ReadTimeout": 60000,
              "SendTimeout": 60000,
            },
            "IP": "myendpoint",
            "Port": 3000,
            "Proto": "TCP",
            "Service": "",
          },
        ],
        "Image": "akashlytics/hello-akash-world:0.2.0",
        "Name": "web",
        "Resources": Object {
          "cpu": Object {
            "units": Object {
              "val": "500",
            },
          },
          "endpoints": Array [
            Object {
              "kind": 2,
              "sequence_number": 1,
            },
          ],
          "memory": Object {
            "size": Object {
              "val": 536870912,
            },
          },
          "storage": Array [
            Object {
              "name": "default",
              "size": Object {
                "val": 536870912,
              },
            },
          ],
        },
      },
    ],
  },
]
`
