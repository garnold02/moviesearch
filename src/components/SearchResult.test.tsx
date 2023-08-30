import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import SearchResult from "./SearchResult";
import { TMDBMovieBasic } from "../tmdb/common";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Search result", () => {
    it("should display the provided data", async () => {
        const data = {
            title: "Movie Title",
            release_date: "2022-02-22",
        } as TMDBMovieBasic;

        render(<SearchResult data={data} />);

        expect(screen.getByText("Movie Title")).toBeTruthy();
        expect(screen.getByText("2022")).toBeTruthy();
    });

    it("should display correctly without release date", async () => {
        const data = {
            title: "Movie Title",
            release_date: null,
        } as unknown as TMDBMovieBasic;

        render(<SearchResult data={data} />);

        expect(screen.getByText("Movie Title")).toBeTruthy();
        expect(screen.getByText("N/A")).toBeTruthy();
    });

    it("should fire callback when it is selected", async () => {
        const user = userEvent.setup();

        const data = {
            id: 1337,
            title: "Movie Title",
            release_date: "2022-02-22",
        } as TMDBMovieBasic;

        let selectedId;

        render(<SearchResult data={data} onSelect={(v) => (selectedId = v)} />);

        await user.click(screen.getByText("Movie Title"));
        expect(selectedId).toBe(1337);
    });
});
