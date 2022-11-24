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

const testManifest = [
  {
    "Name": "akash",
    "Services": [
      {
        "Name": "tetris",
        "Image": "bsord/tetris",
        "Command": null,
        "Args": null,
        "Env": null,
        "Resources": {
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
          "endpoints": null
        },
        "Count": 1,
        "Expose": [
          {
            "Port": 80,
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

tap.test("SDL: Constructor", async (t) => {
  t.plan(1);

  const sdl = new SDL();

  t.ok(sdl instanceof SDL, "Default SDL is not undefined");
});

tap.test("SDL: fromString", async (t) => {
  t.plan(2);

  const sdl = SDL.fromString(testSDL);

  t.ok(sdl instanceof SDL, "Default SDL is not undefined");
  t.ok(sdl.data !== null, "SDL has data object");
});

tap.test("SDL: Manifest", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL);
  const result = sdl.manifest();
  const expected = testManifest;

  t.same(result, expected, "Manifest matches expected result");
});