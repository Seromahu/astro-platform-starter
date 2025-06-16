export default async (request, context) => {
    const path = context.geo?.country?.code === 'TR' ? '/edge/turkey' : '/edge/not-turkey';
    return Response.redirect(new URL(path, request.url));
};

export const config = {
    path: '/edge'
};
