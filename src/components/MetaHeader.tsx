import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  desc?: string;
}
export default function MetaHeader({ title, desc }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc || title} />
    </Helmet>
  );
}
