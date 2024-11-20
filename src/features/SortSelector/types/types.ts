export type OrderOption = {
    id: number;
    name: orderType;
    label: orderLabelType;
};

export type orderType = "name" | "released" | "added" | "created" | "updated" | "rating" | "metacritic";

export type orderLabelType = "Name" | "Released" | "Added" | "Created" | "Updated" | "Rating" | "Metacritic";