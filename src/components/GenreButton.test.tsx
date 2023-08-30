import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";

import GenreButton from "./GenreButton";
import { TMDBGenre } from "../tmdb/genreMovieList";

afterEach(cleanup);

describe("Genre button", () => {
    it("should display the genre name", async () => {
        const genre: TMDBGenre = {
            id: 5,
            name: "test_genre",
        };

        render(<GenreButton genre={genre} />);
        expect(screen.getByText("test_genre")).toBeTruthy();
    });

    it("should switch to on when clicked and was off", async () => {
        const user = userEvent.setup();

        const genre: TMDBGenre = {
            id: 5,
            name: "test_genre",
        };

        let id = null;
        let value = null;

        render(
            <GenreButton
                genre={genre}
                onChange={(i, v) => {
                    id = i;
                    value = v;
                }}
            />
        );

        await user.click(screen.getByText("test_genre"));
        expect(id).toBe(5);
        expect(value).toBe(true);
    });

    it("should switch to off when clicked and was on", async () => {
        const user = userEvent.setup();

        const genre: TMDBGenre = {
            id: 5,
            name: "test_genre",
        };

        let id = null;
        let value = null;

        render(
            <GenreButton
                genre={genre}
                onChange={(i, v) => {
                    id = i;
                    value = v;
                }}
            />
        );

        await user.click(screen.getByText("test_genre"));

        expect(id).toBe(5);
        expect(value).toBe(true);

        await user.click(screen.getByText("test_genre"));

        expect(id).toBe(5);
        expect(value).toBe(false);
    });
});
