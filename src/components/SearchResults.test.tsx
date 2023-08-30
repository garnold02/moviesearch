import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";

import SearchResults from "./SearchResults";
import { TMDBMovieBasic, TMDBSearchMovieResponse } from "../tmdb/common";

afterEach(cleanup);

describe("Search results", () => {
    it("display 'no results' when there are no results", async () => {
        const data: TMDBSearchMovieResponse = {
            page: 1,
            results: [],
            total_pages: 1,
            total_results: 0,
        };

        render(<SearchResults data={data} />);
        expect(screen.getByText("no_results")).toBeTruthy();
    });

    it("display results correctly", async () => {
        const data: TMDBSearchMovieResponse = {
            page: 1,
            results: [
                {
                    title: "First Movie",
                    release_date: "2021",
                } as TMDBMovieBasic,
                {
                    title: "Second Movie",
                    release_date: "2022",
                } as TMDBMovieBasic,
            ],
            total_pages: 1,
            total_results: 2,
        };

        render(<SearchResults data={data} />);

        expect(screen.getByText("First Movie")).toBeTruthy();
        expect(screen.getByText("2021")).toBeTruthy();
        expect(screen.getByText("Second Movie")).toBeTruthy();
        expect(screen.getByText("2022")).toBeTruthy();
    });

    it("fire 'onSelect' event correctly", async () => {
        const user = userEvent.setup();

        const data: TMDBSearchMovieResponse = {
            page: 1,
            results: [
                {
                    id: 1337,
                    title: "First Movie",
                    release_date: "2021",
                } as TMDBMovieBasic,
            ],
            total_pages: 1,
            total_results: 1,
        };

        let movieId = undefined;

        render(<SearchResults data={data} onSelect={(v) => (movieId = v)} />);

        await user.click(screen.getByText("First Movie"));
        expect(movieId).toBe(1337);
    });

    it("fire 'onSwitchPage' event correctly", async () => {
        const user = userEvent.setup();

        const data: TMDBSearchMovieResponse = {
            page: 4,
            results: [
                {
                    title: "First Movie",
                    release_date: "2021",
                } as TMDBMovieBasic,
            ],
            total_pages: 20,
            total_results: 100,
        };

        let page = 4;

        render(<SearchResults data={data} onSwitchPage={(v) => (page = v)} />);

        await user.click(screen.getByText("5"));
        expect(page).toBe(5);
    });
});
