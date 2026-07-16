import { describe, it, expect } from "vitest";
import { setNetworkId } from "@midnight-ntwrk/midnight-js-network-id";
import { VerdictSimulator } from "../contract/src/test/verdict-simulator.js";

// Use the local undeployed network for testing
setNetworkId("undeployed");

describe("VERDICT contract (tests/)", () => {
  // Verify the contract starts with the expected default state
  it("initializes ledger state with zero checks", () => {
    // Create a simulator instance with initial game data
    const sim = new VerdictSimulator({
      prevPrevPos: [100n, 100n],
      prevPos: [105n, 105n],
      currPos: [110n, 110n],
      action: 0n,
      isFirstMove: 0n,
      prevHash: new Uint8Array(32),
      nonce: new Uint8Array(32),
      aimHistory: new Array(16).fill(0n) as bigint[],
      actionHistory: new Array(8).fill(0n) as bigint[],
      tickHistory: new Array(8).fill(0n) as bigint[],
      currentTick: 0n,
      enemyPositions: new Array(16).fill(0n) as bigint[],
    });

    // Retrieve the current ledger state
    const ledger = sim.getLedger();

    // Check that all values are initialized correctly
    expect(ledger.totalChecks).toEqual(0n);
    expect(ledger.totalFlagged).toEqual(0n);
    expect(ledger.sessionActive).toEqual(false);
  });
});
