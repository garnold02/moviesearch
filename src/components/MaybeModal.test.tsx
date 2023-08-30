import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

import MaybeModal from "./MaybeModal";

afterEach(cleanup);

describe("Maybe modal", () => {
    it("should not render the modal when movieId is undefined", async () => {
        const res = render(<MaybeModal />);
        expect(res.container.firstChild).toBeFalsy();
    });

    it("should render the modal when movieId is defined", async () => {
        const res = render(<MaybeModal movieId={11} />);
        expect(res.container.firstChild).toBeTruthy();
    });
});
