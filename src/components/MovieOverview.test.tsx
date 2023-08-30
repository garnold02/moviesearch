import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import MovieOverview from "./MovieOverview";

afterEach(cleanup);

describe("Movie overview", () => {
    it("should display text when it is defined", async () => {
        render(<MovieOverview text="Overview text" />);
        expect(screen.getByText("Overview text")).toBeTruthy();
    });

    it("should not display anything when text is undefined", async () => {
        const res = render(<MovieOverview text={undefined} />);
        expect(res.container.firstChild).toBeFalsy();
    });
});
