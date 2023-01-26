import tap from "tap";

import { SDL } from '../src/sdl';

const testSDL = `version: '2.0'
services:
  minesweeper:
    image: creepto/minesweeper
    expose:
      - port: 3000
        as: 80
        to:
          - global: true
profiles:
  compute:
    minesweeper:
      resources:
        cpu:
          units: 0.1
        memory:
          size: 512Mi
        storage:
          - size: 512Mi
  placement:
    akash:
      attributes:
        organization: akash.network
      signedBy:
        anyOf:
          - akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63
          - akash18qa2a2ltfyvkyj0ggj3hkvuj6twzyumuaru9s4
      pricing:
        minesweeper:
          denom: uakt
          amount: 10000
deployment:
  minesweeper:
    akash:
      profile: minesweeper
      count: 1
`;

const expectedManifest = [
  {
    "Name": "akash",
    "Services": [
      {
        "Name": "minesweeper",
        "Image": "creepto/minesweeper",
        "Command": null,
        "Args": null,
        "Env": null,
        "Resources": {
          "cpu": {
            "units": {
              "val": "100"
            }
          },
          "memory": {
            "quantity": {
              "val": "536870912"
            }
          },
          "storage": [
            {
              "name": "default",
              "quantity": {
                "val": "536870912"
              }
            }
          ],
          "endpoints": null
        },
        "Count": 1,
        "Expose": [
          {
            "Port": 3000,
            "ExternalPort": 80,
            "Proto": "TCP",
            "Service": "",
            "Global": true,
            "Hosts": null,
            "HTTPOptions": {
              "MaxBodySize": 1048576,
              "ReadTimeout": 60000,
              "SendTimeout": 60000,
              "NextTries": 3,
              "NextTimeout": 0,
              "NextCases": [
                "error",
                "timeout"
              ]
            },
            "IP": "",
            "EndpointSequenceNumber": 0
          }
        ]
      }
    ]
  }
];

const expectedGroups = [
  {
    "name": "akash",
    "requirements": {
      "attributes": [
        {
          "key": "organization",
          "value": "akash.network"
        }
      ],
      "signed_by": {
        "all_of": [],
        "any_of": [
          "akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63",
          "akash18qa2a2ltfyvkyj0ggj3hkvuj6twzyumuaru9s4"
        ]
      }
    },
    "resources": [
      {
        "resources": {
          "cpu": {
            "units": {
              "val": {
                "0": 49,
                "1": 48,
                "2": 48
              }
            }
          },
          "memory": {
            "quantity": {
              "val": {
                "0": 53,
                "1": 51,
                "2": 54,
                "3": 56,
                "4": 55,
                "5": 48,
                "6": 57,
                "7": 49,
                "8": 50
              }
            }
          },
          "storage": [
            {
              "name": "default",
              "quantity": {
                "val": {
                  "0": 53,
                  "1": 51,
                  "2": 54,
                  "3": 56,
                  "4": 55,
                  "5": 48,
                  "6": 57,
                  "7": 49,
                  "8": 50
                }
              }
            }
          ],
          "endpoints": [
            {
              "kind": 0,
              "sequence_number": 0
            }
          ]
        },
        "price": {
          "denom": "uakt",
          "amount": "10000"
        },
        "count": 1
      }
    ]
  }
];

const expectedVersion = new Uint8Array([
  117, 11, 114, 73, 243, 231, 14, 234,
  211, 32, 100, 158, 202, 240, 89, 251,
  6, 222, 2, 248, 30, 169, 146, 97,
  176, 103, 44, 196, 64, 220, 97, 102
]);

tap.test("SDL mine: fromString", async (t) => {
  t.plan(2);

  const sdl = SDL.fromString(testSDL);

  t.ok(sdl instanceof SDL, "Default SDL is not undefined");
  t.ok(sdl.data !== null, "SDL has data object");
});

tap.test("SDL mine: Manifest", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL);
  const result = sdl.manifest(true);
  const expected = expectedManifest;

  t.same(result, expected, "Manifest matches expected result");
});

tap.test("SDL mine: DeploymentGroups", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL);
  const result = JSON.parse(JSON.stringify(sdl.groups()));
  const expected = expectedGroups;

  t.same(result, expected, "Deployment groups matches expected result");
});

tap.test("SDL mine: Version", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL);
  const result = await sdl.manifestVersion();
  const expected = expectedVersion;

  t.same(result, expected, "Manifest version matches expected result");
});