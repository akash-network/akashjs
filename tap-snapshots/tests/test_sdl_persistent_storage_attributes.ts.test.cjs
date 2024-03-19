/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`tests/test_sdl_persistent_storage_attributes.ts TAP SDL: Persistent Storage Manifest > Manifest matches expected result 1`] = `
Array [
  Object {
    "Name": "akash",
    "Services": Array [
      Object {
        "Args": null,
        "Command": null,
        "Count": 1,
        "Env": Array [
          "WORDPRESS_DB_HOST=db",
          "WORDPRESS_DB_USER=wordpress",
          "WORDPRESS_DB_PASSWORD=testpass4you",
          "WORDPRESS_DB_NAME=wordpress",
        ],
        "Expose": Array [
          Object {
            "EndpointSequenceNumber": 0,
            "ExternalPort": 0,
            "Global": true,
            "Hosts": null,
            "HTTPOptions": Object {
              "MaxBodySize": 104857600,
              "NextCases": Array [
                "error",
                "timeout",
              ],
              "NextTimeout": 0,
              "NextTries": 3,
              "ReadTimeout": 60000,
              "SendTimeout": 60000,
            },
            "IP": "",
            "Port": 80,
            "Proto": "TCP",
            "Service": "",
          },
        ],
        "Image": "wordpress",
        "Name": "wordpress",
        "params": Object {
          "Storage": Array [
            Object {
              "mount": "/var/www/html",
              "name": "wordpress-data",
              "readOnly": false,
            },
          ],
        },
        "Resources": Object {
          "cpu": Object {
            "units": Object {
              "val": "4000",
            },
          },
          "endpoints": null,
          "memory": Object {
            "size": Object {
              "val": 4294967296,
            },
          },
          "storage": Array [
            Object {
              "name": "default",
              "size": Object {
                "val": 4294967296,
              },
            },
            Object {
              "attributes": Array [
                Object {
                  "key": "class",
                  "value": "beta3",
                },
                Object {
                  "key": "persistent",
                  "value": "true",
                },
              ],
              "name": "wordpress-data",
              "size": Object {
                "val": 34359738368,
              },
            },
          ],
        },
      },
      Object {
        "Args": null,
        "Command": null,
        "Count": 1,
        "Env": Array [
          "MYSQL_RANDOM_ROOT_PASSWORD=1",
          "MYSQL_DATABASE=wordpress",
          "MYSQL_USER=wordpress",
          "MYSQL_PASSWORD=testpass4you",
        ],
        "Expose": Array [
          Object {
            "EndpointSequenceNumber": 0,
            "ExternalPort": 0,
            "Global": false,
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
            "IP": "",
            "Port": 3306,
            "Proto": "TCP",
            "Service": "wordpress",
          },
          Object {
            "EndpointSequenceNumber": 0,
            "ExternalPort": 0,
            "Global": false,
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
            "IP": "",
            "Port": 33060,
            "Proto": "TCP",
            "Service": "wordpress",
          },
        ],
        "Image": "mariadb:10.6.4",
        "Name": "db",
        "params": Object {
          "Storage": Array [
            Object {
              "mount": "/var/lib/mysql",
              "name": "wordpress-db",
              "readOnly": false,
            },
            Object {
              "mount": "/dev/shm",
              "name": "shm",
              "readOnly": false,
            },
          ],
        },
        "Resources": Object {
          "cpu": Object {
            "units": Object {
              "val": "1000",
            },
          },
          "endpoints": null,
          "memory": Object {
            "size": Object {
              "val": 1073741824,
            },
          },
          "storage": Array [
            Object {
              "name": "default",
              "size": Object {
                "val": 1073741824,
              },
            },
            Object {
              "attributes": Array [
                Object {
                  "key": "class",
                  "value": "beta3",
                },
                Object {
                  "key": "persistent",
                  "value": "true",
                },
              ],
              "name": "wordpress-db",
              "size": Object {
                "val": 8589934592,
              },
            },
            Object {
              "attributes": Array [
                Object {
                  "key": "class",
                  "value": "ram",
                },
              ],
              "name": "shm",
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
