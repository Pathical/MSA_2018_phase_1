import * as React from "react";

export default class FirstComponent extends React.Component<{ resultsFromAPI: any }> {



        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h1>(ಥ﹏ಥ)
                                </h1>

                                <p>   {this.props.resultsFromAPI}   </p>
                        </div>
                );
        }
}