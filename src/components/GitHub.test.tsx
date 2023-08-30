import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import GitHub from "./GitHub";

afterEach(cleanup);

describe("GitHub", () => {
    it("should display the GitHub link", async () => {
        render(<GitHub />);
        expect(screen.getByRole("link").getAttribute("href")).toBe(
            "https://github.com/garnold02/moviesearch"
        );
    });
});
