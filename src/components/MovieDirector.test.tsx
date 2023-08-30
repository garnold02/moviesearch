import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import MovieDirector from "./MovieDirector";
import { TMDBMovieCrewMember } from "../tmdb/movieCredits";

afterEach(cleanup);

describe("Movie director", () => {
    it("should display director name when it exists", async () => {
        const crew = [
            {
                name: "Director Name",
                job: "Director",
            } as TMDBMovieCrewMember,
        ];

        render(<MovieDirector crew={crew} />);
        expect(screen.getByText("Director Name")).toBeTruthy();
    });

    it("should not display anything when director does not exist", async () => {
        const crew = [
            {
                name: "Producer Name",
                job: "Producer",
            } as TMDBMovieCrewMember,
        ];

        const res = render(<MovieDirector crew={crew} />);
        expect(res.container.firstChild).toBeFalsy();
    });
});
