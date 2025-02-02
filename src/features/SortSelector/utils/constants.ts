// FS imports
import { OrderOption } from "features/SortSelector/types";

export const ORDERING_OPTIONS: OrderOption[] = [
    { id: 0, name: "none", label: "None" },
    { id: 1, name: "name", label: "Name" },
    { id: 2, name: "released", label: "Released" },
    { id: 3, name: "added", label: "Added" },
    { id: 4, name: "created", label: "Created" },
    { id: 5, name: "updated", label: "Updated" },
    { id: 6, name: "rating", label: "Rating" },
    { id: 7, name: "metacritic", label: "Metacritic" },
];