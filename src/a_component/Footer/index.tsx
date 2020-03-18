/* Footer 页面底部 */
import React from "react";
import { Layout } from "antd";
import "./index.less";

const { Footer } = Layout;

interface Props {
  className?: string;
}

export default class Com extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Footer className={`footer ${this.props.className}`}>
        © 2018-2020{" "}
        <a href="https://blog.isluo.com" target="_blank" rel="noopener noreferrer">
          blog.isluo.com
        </a>
        , Inc.
      </Footer>
    );
  }
}
