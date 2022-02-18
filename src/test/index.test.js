import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import IndexList from "../components/molecules/index/indexList/indexList";

let container = null;
beforeEach(() => {
    // ustaw element DOM jako cel renderowania
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // posprzątaj po zakończeniu
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<IndexList films={[{id: "2321", imageUrl:"sdada", rating:"2.3", title:"test", isLike:true}]}/>, container);
    });
    expect(container.textContent).toBe("Filmy które Ci się podobają:test(2.3/10)Wyczyść listę");

    act(() => {
        render(<IndexList films={[{id: "2321", imageUrl:"sdada", rating:"22", title:"Filmiki", isLike:true}]} />, container);
    });
    expect(container.textContent).toBe("Filmy które Ci się podobają:Filmiki(22/10)Wyczyść listę");

    act(() => {
        render(<IndexList films={[{id: "2321", imageUrl:"sdada", rating:"12", title:"Film2", isLike:true}]} />, container);
    });
    expect(container.textContent).toBe("Filmy które Ci się podobają:Film2(12/10)Wyczyść listę");
});