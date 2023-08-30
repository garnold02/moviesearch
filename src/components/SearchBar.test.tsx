import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";

import SearchBar from "./SearchBar";

afterEach(cleanup);

describe("Search bar", () => {
    it("should not search when field is empty", async () => {
        const user = userEvent.setup();

        let query = null;

        render(<SearchBar onSearch={(q) => (query = q)} />);

        await user.type(screen.getByRole("textbox"), "{enter}");
        await user.click(screen.getByRole("button"));
        expect(query).toBe(null);
    });

    it("should search when enter is pressed", async () => {
        const user = userEvent.setup();

        let query = "";

        render(<SearchBar onSearch={(q) => (query = q)} />);

        await user.type(screen.getByRole("textbox"), "query{enter}");
        expect(query).toBe("query");
    });

    it("should search when button is pressed", async () => {
        const user = userEvent.setup();

        let query = "";

        render(<SearchBar onSearch={(q) => (query = q)} />);

        await user.type(screen.getByRole("textbox"), "query");
        await user.click(screen.getByRole("button"));
        expect(query).toBe("query");
    });

    it("should show default value", async () => {
        render(<SearchBar defaultValue="test value" />);
        expect(screen.getByDisplayValue("test value")).toBeTruthy();
    });
});
