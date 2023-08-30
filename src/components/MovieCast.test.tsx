import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import MovieCast from "./MovieCast";
import { TMDBMovieCastMember } from "../tmdb/movieCredits";

afterEach(cleanup);

describe("MovieCast", () => {
    it("should display cast members properly", () => {
        const cast = [
            {
                name: "Real One",
                character: "Fictional One",
            },
            {
                name: "Real Two",
                character: "Fictional Two",
            },
        ] as TMDBMovieCastMember[];

        render(<MovieCast cast={cast} />);

        expect(screen.getByText("Real One")).toBeTruthy();
        expect(screen.getByText("Fictional One")).toBeTruthy();
        expect(screen.getByText("Real Two")).toBeTruthy();
        expect(screen.getByText("Fictional Two")).toBeTruthy();
    });
});
