import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import UserScore from "./UserScore";

afterEach(cleanup);

describe("User score", () => {
    it("should render random value correctly", async () => {
        const value = Math.random();
        const text = `${Math.round(value * 10.0)}%`;

        render(<UserScore value={value} />);

        expect(screen.getByText(text)).toBeTruthy();
    });
});
