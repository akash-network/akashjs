import tap from "tap";

import { SDL } from "../src/sdl";

const testSDL = `version: "2.0"
services:
  web:
    image: nginx
    expose:
      - port: 80
        accept:
          - ahostname.com
        to:
          - global: true
      - port: 12345
        to:
          - global: true
        proto: udp
profiles:
  compute:
    web:
      resources:
        cpu:
          units: "100m"
        gpu:
          units: 1
          attributes:
            vendor:
              nvidia:
        memory:
          size: "128Mi"
        storage:
        - size: "1Gi"
  placement:
    westcoast:
      attributes:
        region: us-west
        blalbla: foo
      signedBy:
        anyOf:
          - 1
          - 2
        allOf:
          - 3
          - 4
      pricing:
        web:
          denom: uakt
          amount: 50
deployment:
  web:
    westcoast:
      profile: web
      count: 2
`;

tap.test("SDL: GPU Manifest", async t => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, "beta3");
  const result = sdl.manifest();

  t.matchSnapshot(result, "Manifest matches expected result");
});

tap.test("SDL: GPU Version", async t => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, "beta3");
  const result = await sdl.manifestVersion();

  t.matchSnapshot(result, "Manifest version matches expected result");
});
