import tap from "tap";

import { SDL } from '../src/sdl';

const testSDL = `version: '2.0'
services:
  tetris:
    image: bsord/tetris
    expose:
      - port: 80
        as: 80
        to:
          - global: true
profiles:
  compute:
    tetris:
      resources:
        cpu:
          units: 1
        memory:
          size: 512Mi
        storage:
          - size: 512Mi
  placement:
    akash:
      attributes:
        host: akash
      signedBy:
        anyOf:
          - akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63
          - akash18qa2a2ltfyvkyj0ggj3hkvuj6twzyumuaru9s4
      pricing:
        tetris:
          denom: uakt
          amount: 10000
deployment:
  tetris:
    akash:
      profile: tetris
      count: 1
`;

const expectedManifest = [
  {
    "name": "akash",
    "services": [
      {
        "name": "tetris",
        "image": "bsord/tetris",
        "command": null,
        "args": null,
        "env": null,
        "resources": {
          "cpu": {
            "units": {
              "val": "1000"
            }
          },
          "memory": {
            "size": {
              "val": "536870912"
            }
          },
          "storage": [
            {
              "name": "default",
              "size": {
                "val": "536870912"
              }
            }
          ],
          "gpu": {
            "units": {
              "val": "0"
            }
          },
          "endpoints": null
        },
        "count": 1,
        "expose": [
          {
            "port": 80,
            "externalPort": 80,
            "proto": "TCP",
            "service": "",
            "global": true,
            "hosts": null,
            "httpOptions": {
              "maxBodySize": 1048576,
              "readTimeout": 60000,
              "sendTimeout": 60000,
              "nextTries": 3,
              "nextTimeout": 0,
              "nextCases": [
                "error",
                "timeout"
              ]
            },
            "ip": "",
            "endpointSequenceNumber": 0
          }
        ],
        "params": null
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
          "key": "host",
          "value": "akash"
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
              "val": new Uint8Array([
                49,
                48,
                48,
                48
              ])
            },
            "attributes": undefined,
          },
          "memory": {
            "quantity": {
              "val": new Uint8Array([
                53,
                51,
                54,
                56,
                55,
                48,
                57,
                49,
                50
              ]),
            },
            "attributes": undefined,
          },
          "storage": [
            {
              "name": "default",
              "quantity": {
                "val": new Uint8Array([
                  53,
                  51,
                  54,
                  56,
                  55,
                  48,
                  57,
                  49,
                  50
                ]),
              },
              "attributes": undefined,
            }
          ],
          "gpu": {
            "units": {
              "val": new Uint8Array([
                48
              ]),
            },
            "attributes": undefined,
          },
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

const expectedPreVersionJson = '[{"name":"akash","services":[{"args":null,"command":null,"count":1,"env":null,"expose":[{"endpointSequenceNumber":0,"externalPort":80,"global":true,"hosts":null,"httpOptions":{"maxBodySize":1048576,"nextCases":["error","timeout"],"nextTimeout":0,"nextTries":3,"readTimeout":60000,"sendTimeout":60000},"ip":"","port":80,"proto":"TCP","service":""}],"image":"bsord/tetris","name":"tetris","params":null,"resources":{"cpu":{"units":{"val":"1000"}},"endpoints":null,"gpu":{"units":{"val":"0"}},"memory":{"size":{"val":"536870912"}},"storage":[{"name":"default","size":{"val":"536870912"}}]}}]}]';

const expectedVersion = new Uint8Array([
  7, 61, 15, 67, 217, 144, 164, 105, 60, 27, 165,
  41, 182, 16, 117, 223, 165, 47, 90, 177, 69, 231,
  64, 38, 251, 236, 9, 34, 117, 55, 132, 49
]);

tap.test("SDL: fromString", async (t) => {
  t.plan(2);

  const sdl = SDL.fromString(testSDL, 'beta3');

  t.ok(sdl instanceof SDL, "Default SDL is not undefined");
  t.ok(sdl.data !== null, "SDL has data object");
});

tap.test("SDL: Manifest", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = sdl.manifest();
  const expected = expectedManifest;

  t.same(result, expected, "Manifest matches expected result");
});

tap.test("SDL: DeploymentGroups", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = sdl.groups();
  const expected = expectedGroups;

  t.same(result, expected, "Deployment groups matches expected result");
});

tap.test("SDL: Version", async (t) => {
  t.plan(2);

  const formatHelper = (arg: string) => {
    try {
      return JSON.stringify(JSON.parse(arg), null, 2);
    } catch (e) {
      console.error('Error parsing JSON', e)
      console.error(arg.slice(565, 600))
      return arg;
    }
  }

  const sdl = SDL.fromString(testSDL, 'beta3');
  const preVersionJson = sdl.manifestSortedJSON();
  const result = await sdl.manifestVersion();
  const expected = expectedVersion;

  t.same(
    formatHelper(preVersionJson),
    formatHelper(expectedPreVersionJson),
    'Manifest pre-encoding JSON matches'
  );

  t.same(result, expected, "Manifest version matches expected result");
});