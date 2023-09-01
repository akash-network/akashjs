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
        "createdAt": "1027707",
        "deploymentId": Object {
          "dseq": "1027706",
          "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        },
        "state": "closed",
        "version": "JVutORwsoCSkdzhlnZgs/IxkcXRaxxPIyUwIkyN1F9M=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "depositor": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "funds": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk/1027706",
        },
        "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "settledAt": "1027769",
        "state": "closed",
        "transferred": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "1027707",
          "groupId": Object {
            "dseq": "1027706",
            "gseq": 1,
            "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
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
                  "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "100.000000000000000",
                  "denom": "uakt",
                },
                "resource": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAwMA==",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "RANDOM_PORT",
                      "sequenceNumber": 0,
                    },
                  ],
                  "gpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MA==",
                    },
                  },
                  "id": 1,
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                  "storage": Array [
                    Object {
                      "attributes": Array [],
                      "name": "default",
                      "quantity": Object {
                        "val": "MTA3Mzc0MTgyNA==",
                      },
                    },
                  ],
                },
              },
            ],
          },
          "state": "closed",
        },
      ],
    },
    Object {
      "deployment": Object {
        "createdAt": "1027774",
        "deploymentId": Object {
          "dseq": "1027773",
          "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        },
        "state": "closed",
        "version": "JVutORwsoCSkdzhlnZgs/IxkcXRaxxPIyUwIkyN1F9M=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "depositor": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "funds": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk/1027773",
        },
        "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "settledAt": "1027829",
        "state": "closed",
        "transferred": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "1027774",
          "groupId": Object {
            "dseq": "1027773",
            "gseq": 1,
            "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
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
                  "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "1000.00000000000000",
                  "denom": "uakt",
                },
                "resource": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAwMA==",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "RANDOM_PORT",
                      "sequenceNumber": 0,
                    },
                  ],
                  "gpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MA==",
                    },
                  },
                  "id": 1,
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                  "storage": Array [
                    Object {
                      "attributes": Array [],
                      "name": "default",
                      "quantity": Object {
                        "val": "MTA3Mzc0MTgyNA==",
                      },
                    },
                  ],
                },
              },
            ],
          },
          "state": "closed",
        },
      ],
    },
    Object {
      "deployment": Object {
        "createdAt": "1027834",
        "deploymentId": Object {
          "dseq": "1027833",
          "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        },
        "state": "closed",
        "version": "JVutORwsoCSkdzhlnZgs/IxkcXRaxxPIyUwIkyN1F9M=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "depositor": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "funds": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk/1027833",
        },
        "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "settledAt": "1027992",
        "state": "closed",
        "transferred": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "1027834",
          "groupId": Object {
            "dseq": "1027833",
            "gseq": 1,
            "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
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
                  "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "10000.0000000000000",
                  "denom": "uakt",
                },
                "resource": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAwMA==",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "RANDOM_PORT",
                      "sequenceNumber": 0,
                    },
                  ],
                  "gpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MA==",
                    },
                  },
                  "id": 1,
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                  "storage": Array [
                    Object {
                      "attributes": Array [],
                      "name": "default",
                      "quantity": Object {
                        "val": "MTA3Mzc0MTgyNA==",
                      },
                    },
                  ],
                },
              },
            ],
          },
          "state": "closed",
        },
      ],
    },
    Object {
      "deployment": Object {
        "createdAt": "1033761",
        "deploymentId": Object {
          "dseq": "1033759",
          "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        },
        "state": "closed",
        "version": "XuGsdDaxWgy06YXjrtzMzgELTEWVZprj03MwAmiP0qM=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "depositor": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "funds": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk/1033759",
        },
        "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "settledAt": "1033795",
        "state": "closed",
        "transferred": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "1033761",
          "groupId": Object {
            "dseq": "1033759",
            "gseq": 1,
            "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
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
                  "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "1000.00000000000000",
                  "denom": "uakt",
                },
                "resource": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAw",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "RANDOM_PORT",
                      "sequenceNumber": 0,
                    },
                  ],
                  "gpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MA==",
                    },
                  },
                  "id": 1,
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                  "storage": Array [
                    Object {
                      "attributes": Array [],
                      "name": "default",
                      "quantity": Object {
                        "val": "NTM2ODcwOTEy",
                      },
                    },
                  ],
                },
              },
            ],
          },
          "state": "closed",
        },
      ],
    },
    Object {
      "deployment": Object {
        "createdAt": "1033806",
        "deploymentId": Object {
          "dseq": "1033804",
          "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        },
        "state": "closed",
        "version": "4ju5ZxZDfK1ct9Bkav9RfNBYOwZIc+fhLYUUg/vSYM4=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "depositor": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "funds": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk/1033804",
        },
        "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "settledAt": "1033918",
        "state": "closed",
        "transferred": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "1033806",
          "groupId": Object {
            "dseq": "1033804",
            "gseq": 1,
            "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
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
                  "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "10000.0000000000000",
                  "denom": "uakt",
                },
                "resource": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAw",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "RANDOM_PORT",
                      "sequenceNumber": 0,
                    },
                  ],
                  "gpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MA==",
                    },
                  },
                  "id": 1,
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "MjY4NDM1NDU2",
                    },
                  },
                  "storage": Array [
                    Object {
                      "attributes": Array [],
                      "name": "default",
                      "quantity": Object {
                        "val": "NTM2ODcwOTEy",
                      },
                    },
                  ],
                },
              },
            ],
          },
          "state": "closed",
        },
      ],
    },
    Object {
      "deployment": Object {
        "createdAt": "2541988",
        "deploymentId": Object {
          "dseq": "2528509",
          "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        },
        "state": "active",
        "version": "qFLm0mkB5KLnuGkXkSYKsuFaEFI3ZFbAs532dVZwP5I=",
      },
      "escrowAccount": Object {
        "balance": Object {
          "amount": "5000000.00000000000",
          "denom": "uakt",
        },
        "depositor": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "funds": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
        "id": Object {
          "scope": "deployment",
          "xid": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk/2528509",
        },
        "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
        "settledAt": "2541988",
        "state": "open",
        "transferred": Object {
          "amount": "0.00000000000000000",
          "denom": "uakt",
        },
      },
      "groups": Array [
        Object {
          "createdAt": "2541988",
          "groupId": Object {
            "dseq": "2528509",
            "gseq": 1,
            "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
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
                  "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
                ],
              },
            },
            "resources": Array [
              Object {
                "count": 1,
                "price": Object {
                  "amount": "1000.00000000000000",
                  "denom": "uakt",
                },
                "resource": Object {
                  "cpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MTAw",
                    },
                  },
                  "endpoints": Array [
                    Object {
                      "kind": "RANDOM_PORT",
                      "sequenceNumber": 0,
                    },
                  ],
                  "gpu": Object {
                    "attributes": Array [],
                    "units": Object {
                      "val": "MA==",
                    },
                  },
                  "id": 1,
                  "memory": Object {
                    "attributes": Array [],
                    "quantity": Object {
                      "val": "NTM2ODcwOTEy",
                    },
                  },
                  "storage": Array [
                    Object {
                      "attributes": Array [],
                      "name": "default",
                      "quantity": Object {
                        "val": "NTM2ODcwOTEy",
                      },
                    },
                  ],
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
    "total": "6",
  },
}
`

exports[`tests/test_deployments.ts TAP Deployments: query deployment with owner and dseq > Deployments query matches expected result 1`] = `
Object {
  "deployment": Object {
    "createdAt": "1027707",
    "deploymentId": Object {
      "dseq": "1027706",
      "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
    },
    "state": "closed",
    "version": "JVutORwsoCSkdzhlnZgs/IxkcXRaxxPIyUwIkyN1F9M=",
  },
  "escrowAccount": Object {
    "balance": Object {
      "amount": "0.00000000000000000",
      "denom": "uakt",
    },
    "depositor": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
    "funds": Object {
      "amount": "0.00000000000000000",
      "denom": "uakt",
    },
    "id": Object {
      "scope": "deployment",
      "xid": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk/1027706",
    },
    "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
    "settledAt": "1027769",
    "state": "closed",
    "transferred": Object {
      "amount": "0.00000000000000000",
      "denom": "uakt",
    },
  },
  "groups": Array [
    Object {
      "createdAt": "1027707",
      "groupId": Object {
        "dseq": "1027706",
        "gseq": 1,
        "owner": "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
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
              "akash1qqzwc5d7hynl67nsmn9jukvwqp3vzdl6j2t7lk",
            ],
          },
        },
        "resources": Array [
          Object {
            "count": 1,
            "price": Object {
              "amount": "100.000000000000000",
              "denom": "uakt",
            },
            "resource": Object {
              "cpu": Object {
                "attributes": Array [],
                "units": Object {
                  "val": "MTAwMA==",
                },
              },
              "endpoints": Array [
                Object {
                  "kind": "RANDOM_PORT",
                  "sequenceNumber": 0,
                },
              ],
              "gpu": Object {
                "attributes": Array [],
                "units": Object {
                  "val": "MA==",
                },
              },
              "id": 1,
              "memory": Object {
                "attributes": Array [],
                "quantity": Object {
                  "val": "NTM2ODcwOTEy",
                },
              },
              "storage": Array [
                Object {
                  "attributes": Array [],
                  "name": "default",
                  "quantity": Object {
                    "val": "MTA3Mzc0MTgyNA==",
                  },
                },
              ],
            },
          },
        ],
      },
      "state": "closed",
    },
  ],
}
`
