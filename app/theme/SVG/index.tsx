import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import svgFiles from 'assets/svg';

export interface SVGProps {
  size?: number;
  fill?: string;
  title: keyof typeof svgFiles;
}

const SVG: React.ComponentType<SVGProps> = (props) => {
  const rawXml = svgFiles[props?.title];
  const xml = React.useMemo(
    (): string =>
      props.fill
        ? rawXml.replace(/(fill=")(#[a-zA-Z0-9]+)(")/g, `$1${props.fill}$3`)
        : rawXml,
    [rawXml, props.fill],
  );
  return <SvgXml width={props?.size} height={props?.size} xml={xml} />;
};

export default SVG;
