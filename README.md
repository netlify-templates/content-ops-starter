# Netlify Create Content Ops Starter 

![Content Ops Starter](https://assets.stackbit.com/docs/content-ops-starter-thumb.png)

Netlify Create starter that's made for customization with a flexible content model, component library and [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

**⚡ View demo:** [https://content-ops-starter.netlify.app/](https://content-ops-starter.netlify.app/)

## Develop with Netlify Create Locally

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory.

Run the Next.js development server:

```txt
cd content-ops-demo
npm run dev
```

Install the [Netlify Create CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify Create Dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Netlify Create URL. Open this, register or sign in, and you will be directed to Netlify Create's visual editor for your new project.

![Next.js Dev + Netlify Create Dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

## Building for production

To build a static site for production, run the following command

```shell
npm run build
```

## Next Steps

Here are a few suggestions on what to do next if you're new to Netlify Create:

- Learn [how Netlify Create works](https://docs.netlify.com/create/concepts/how-create-works/)
- Follow the [_Getting Started_ tutorial](https://docs.netlify.com/create/get-started/nextjs-markdown/)

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
