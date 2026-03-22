import { Comments } from "../data"


export async function GET(request, { params }) {
    const { id } = await params
    console.log("params =", { id })

    const comment = Comments.find(
        (c) => c.id === parseInt(id)
    )

    return Response.json(comment)
}
export async function PATCH(request, { params }) {
    // 1. Get the ID from the URL params
    const { id } = await params;

    // 2. Get the new text from the request body
    const body = await request.json();
    const { text } = body;

    // 3. Find the comment index by its ID
    const index = Comments.findIndex((e) => e.id === parseInt(id));

    // 4. Update the text and return the result
    if (index !== -1) {
        Comments[index].text = text;
        return Response.json(Comments[index]);
    } else {
        return Response.json({ error: "Comment not found" }, { status: 404 });
    }
}