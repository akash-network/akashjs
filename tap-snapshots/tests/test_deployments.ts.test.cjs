/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`tests/test_deployments.ts TAP Deployments: query deployment list with owner filter > Deployments query matches expected result 1`] = `
Object {
  "deployments": Array [
    Object {
      "deployment": Object {
        "createdAt": "3307232",
        "deploymentId": Object {
          "dseq": "3307230",
          "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
        },
        "state": "active",
        "version": "Oa1fvss6JhrDahYETLdd1KQMyzoZshR28wlawZu9bqg=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "5000000",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6/3307230",
        },
        "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
        "settledAt": "3307232",
        "state": "open",
        "transferred": Object {
          "amount": "0",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "3307232",
          "groupId": Object {
            "dseq": "3307230",
            "gseq": 1,
            "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
          },
          "groupSpec": Object {
            "name": "westcoast",
            "requirements": Object {
              "attributes": Array [
                Object {
                  "key": "host",
                  "value": "akash",
                },
              ],
              "signedBy": Object {
                "allOf": Array [],
                "anyOf": Array [
                  "akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "1000",
                  "denom": "uakt",
                },
                "resources": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAw",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "SHARED_HTTP",
                    },
                  ],
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                  "storage": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                },
              },
            ],
          },
          "state": "open",
        },
      ],
    },
    Object {
      "deployment": Object {
        "createdAt": "3307318",
        "deploymentId": Object {
          "dseq": "3307317",
          "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
        },
        "state": "active",
        "version": "Oa1fvss6JhrDahYETLdd1KQMyzoZshR28wlawZu9bqg=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "2298424",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6/3307317",
        },
        "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
        "settledAt": "4658132",
        "state": "open",
        "transferred": Object {
          "amount": "2701576",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "3307318",
          "groupId": Object {
            "dseq": "3307317",
            "gseq": 1,
            "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
          },
          "groupSpec": Object {
            "name": "westcoast",
            "requirements": Object {
              "attributes": Array [
                Object {
                  "key": "host",
                  "value": "akash",
                },
              ],
              "signedBy": Object {
                "allOf": Array [],
                "anyOf": Array [
                  "akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "1000",
                  "denom": "uakt",
                },
                "resources": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAw",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "SHARED_HTTP",
                    },
                  ],
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                  "storage": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                },
              },
            ],
          },
          "state": "open",
        },
      ],
    },
  ],
  "pagination": Object {
    "nextKey": "",
    "total": "0",
  },
}
`

exports[`tests/test_deployments.ts TAP Deployments: query deployment with owner and dseq > Deployment query matches expected result 1`] = `
Object {
  "deployment": Object {
    "createdAt": "3307318",
    "deploymentId": Object {
      "dseq": "3307317",
      "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
    },
    "state": "active",
    "version": "Oa1fvss6JhrDahYETLdd1KQMyzoZshR28wlawZu9bqg=",
  },
  "escrowAccount": Object {
    "balance": Object {
      "amount": "2272600",
      "denom": "uakt",
    },
    "id": Object {
      "scope": "deployment",
      "xid": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6/3307317",
    },
    "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
    "settledAt": "4671044",
    "state": "open",
    "transferred": Object {
      "amount": "2727400",
      "denom": "uakt",
    },
  },
  "groups": Array [
    Object {
      "createdAt": "3307318",
      "groupId": Object {
        "dseq": "3307317",
        "gseq": 1,
        "owner": "akash1usm9umrgzckc2pa873cmqwqplr9kuur95mz3v6",
      },
      "groupSpec": Object {
        "name": "westcoast",
        "requirements": Object {
          "attributes": Array [
            Object {
              "key": "host",
              "value": "akash",
            },
          ],
          "signedBy": Object {
            "allOf": Array [],
            "anyOf": Array [
              "akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63",
            ],
          },
        },
        "resources": Array [
          Object {
            "count": 1,
            "price": Object {
              "amount": "1000",
              "denom": "uakt",
            },
            "resources": Object {
              "cpu": Object {
                "attributes": Array [],
                "units": Object {
                  "val": "MTAw",
                },
              },
              "endpoints": Array [
                Object {
                  "kind": "SHARED_HTTP",
                },
              ],
              "memory": Object {
                "attributes": Array [],
                "quantity": Object {
                  "val": "NTM2ODcwOTEy",
                },
              },
              "storage": Object {
                "attributes": Array [],
                "quantity": Object {
                  "val": "NTM2ODcwOTEy",
                },
              },
            },
          },
        ],
      },
      "state": "open",
    },
  ],
}
`
