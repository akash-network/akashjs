import tap from "tap";

import { SDL } from "../src/sdl";

const testSDL = `version: '2.0'
services:
  tetris-main:
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
  tetris-main:
    akash:
      profile: tetris
      count: 1
`;

const expectedManifest = [
  {
    Name: "akash",
    Services: [
      {
        Name: "tetris-main",
        Image: "bsord/tetris",
        Command: null,
        Args: null,
        Env: null,
        Resources: {
          cpu: {
            units: {
              val: "1000"
            }
          },
          memory: {
            size: {
              val: 536870912
            }
          },
          storage: [
            {
              name: "default",
              size: {
                val: 536870912
              }
            }
          ],
          endpoints: null
        },
        Count: 1,
        Expose: [
          {
            Port: 80,
            ExternalPort: 80,
            Proto: "TCP",
            Service: "",
            Global: true,
            Hosts: null,
            HTTPOptions: {
              MaxBodySize: 1048576,
              ReadTimeout: 60000,
              SendTimeout: 60000,
              NextTries: 3,
              NextTimeout: 0,
              NextCases: ["error", "timeout"]
            },
            IP: "",
            EndpointSequenceNumber: 0
          }
        ]
      }
    ]
  }
];

const expectedGroups = [
  {
    name: "akash",
    requirements: {
      attributes: [
        {
          key: "host",
          value: "akash"
        }
      ],
      signedBy: {
        allOf: [],
        anyOf: ["akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63", "akash18qa2a2ltfyvkyj0ggj3hkvuj6twzyumuaru9s4"]
      }
    },
    resources: [
      {
        resources: {
          cpu: {
            units: {
              val: {
                "0": 49,
                "1": 48,
                "2": 48,
                "3": 48
              }
            }
          },
          memory: {
            quantity: {
              val: {
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
          storage: [
            {
              name: "default",
              quantity: {
                val: {
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
          endpoints: [
            {
              kind: 0,
              sequence_number: 0
            }
          ]
        },
        price: {
          denom: "uakt",
          amount: "10000"
        },
        count: 1
      }
    ]
  }
];

const expectedPreVersionJson =
  '[{"Name":"akash","Services":[{"Args":null,"Command":null,"Count":1,"Env":null,"Expose":[{"EndpointSequenceNumber":0,"ExternalPort":80,"Global":true,"HTTPOptions":{"MaxBodySize":1048576,"NextCases":["error","timeout"],"NextTimeout":0,"NextTries":3,"ReadTimeout":60000,"SendTimeout":60000},"Hosts":null,"IP":"","Port":80,"Proto":"TCP","Service":""}],"Image":"bsord/tetris","Name":"tetris-main","Resources":{"cpu":{"units":{"val":"1000"}},"endpoints":null,"memory":{"size":{"val":"536870912"}},"storage":[{"name":"default","size":{"val":"536870912"}}]}}]}]';

const expectedVersion = new Uint8Array([
  247, 77, 26, 95, 231, 205, 208, 76, 208, 217, 59, 106, 109, 76, 73, 196, 37, 14, 75, 170, 210, 120, 231, 213, 69, 226, 219, 203, 236, 116, 106, 135
]);

tap.test("SDL: fromString", async t => {
  t.plan(2);

  const sdl = SDL.fromString(testSDL);

  t.ok(sdl instanceof SDL, "Default SDL is not undefined");
  t.ok(sdl.data !== null, "SDL has data object");
});

tap.test("SDL: Manifest", async t => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL);
  const result = sdl.manifest();
  const expected = expectedManifest;

  t.same(result, expected, "Manifest matches expected result");
});

tap.test("SDL: Version", async t => {
  t.plan(2);

  const sdl = SDL.fromString(testSDL);
  const preversionJson = sdl.manifestSortedJSON();
  const result = await sdl.manifestVersion();
  const expected = expectedVersion;

  t.same(preversionJson, expectedPreVersionJson, "Manifest pre-encoding JSON matches");
  t.same(result, expected, "Manifest version matches expected result");
});
