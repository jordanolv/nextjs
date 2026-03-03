import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import path from "path";
import fs from "fs";

type Props = {
  mdxSource: MDXRemoteSerializeResult;
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "content", "mentions.mdx");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const mdxSource = await serialize(fileContent);

  return {
    props: { mdxSource },
  };
};

export default function MentionsPage({ mdxSource }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 prose">
      <MDXRemote {...mdxSource} />
    </main>
  );
}
