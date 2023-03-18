import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { CodeHighlight } from '../components/CodeHighlight';

export const FlexBoxDemo = () => {

    return (
        <div className="grid flexbox-demo">
            <div className="col-12">
                <h4>FlexBox</h4>
                <p>Easily manage the layout of your components with the responsive FlexBox utilities. If you require a
                    utility to manage the layout of your application,
                    refer to the &nbsp;<Link to="/grid">Grid System</Link>&nbsp;instead.
                </p>

                <h5>Flex Container</h5>
                <p>An element can configured as a flexbox container using the <i>flex</i> or <i>inline-flex</i> classes.</p>

<CodeHighlight>
{`
<div className="flex">Flex Container</div>
<div className="inline-flex">Inline Flex Container</div>
`}
</CodeHighlight>

                <div className="box flex md:col-3">Flex Container</div>
                <div className="box inline-flex">Inline Flex Container</div>

                <h5>Direction</h5>
                <p>Default is applied using the <i>{`flex-{direction}`}</i> class where direction can be either of the following.</p>
                <ul>
                    <li>row (default)</li>
                    <li>row-reverse</li>
                    <li>column</li>
                    <li>column-reverse</li>
                </ul>

                <h6>Row</h6>
<CodeHighlight>
{`
<div className="flex">
    <div className="mr-2">Item 1</div>
    <div className="mr-2">Item 2</div>
    <div>Item 3</div>
</div>
`}
</CodeHighlight>
                <div className="flex">
                    <div className="mr-2">Item 1</div>
                    <div className="mr-2">Item 2</div>
                    <div>Item 3</div>
                </div>

                <h6>Column</h6>
<CodeHighlight>
{`
<div className="flex flex-column">
    <div className="md:col-2">Item 1</div>
    <div className="md:col-2">Item 2</div>
    <div>Item 3</div>
</div>
`}
</CodeHighlight>
                <div className="flex flex-column">
                    <div className="md:col-2">Item 1</div>
                    <div className="md:col-2">Item 2</div>
                    <div>Item 3</div>
                </div>

                <h6>Responsive</h6>
                <p>Row direction for larger screens and column for smaller.</p>

<CodeHighlight>
{`
<div className="flex flex-column md:flex-row">
    <div className="md:col-2 mr-2">Item 1</div>
    <div className="md:col-2 mr-2">Item 2</div>
    <div className="md:col-2 mr-2">Item 3</div>
</div>
`}
</CodeHighlight>

                <div className="flex flex-column md:flex-row">
                    <div className="md:col-2 mr-2">Item 1</div>
                    <div className="md:col-2 mr-2">Item 2</div>
                    <div className="md:col-2 mr-2">Item 3</div>
                </div>

                <h6>Direction Classes</h6>
                <ul>
                    <li>flex-row</li>
                    <li>flex-row-reverse</li>
                    <li>flex-column</li>
                    <li>flex-column-reverse</li>
                    <li>sm:flex-row</li>
                    <li>sm:flex-row-reverse</li>
                    <li>sm:flex-column</li>
                    <li>sm:flex-column-reverse</li>
                    <li>md:flex-row</li>
                    <li>md:flex-row-reverse</li>
                    <li>md:flex-column</li>
                    <li>md:flex-column-reverse</li>
                    <li>lg:flex-row</li>
                    <li>lg:flex-row-reverse</li>
                    <li>lg:flex-column</li>
                    <li>lg:flex-column-reverse</li>
                    <li>xl:flex-row</li>
                    <li>xl:flex-row-reverse</li>
                    <li>xl:flex-column</li>
                    <li>xl:flex-column-reverse</li>
                </ul>

                <h5>Order</h5>
                <p>Order configures the way in which they appear in the flex container. <i>{`flex-order-{value}`}</i> format is used where value can be a number from 0 to 6.</p>

                <h6>Customized</h6>
<CodeHighlight>
{`
<div className="flex">
    <div className="mr-2 flex-order-3">Item 1</div>
    <div className="mr-2 flex-order-1">Item 2</div>
    <div className="mr-2 flex-order-2">Item 3</div>
</div>
`}
</CodeHighlight>
                <div className="flex">
                    <div className="mr-2 flex-order-3">Item 1</div>
                    <div className="mr-2 flex-order-1">Item 2</div>
                    <div className="mr-2 flex-order-2">Item 3</div>
                </div>

                <h6>Responsive</h6>
                <p>Orders change depending on the screen size.</p>
<CodeHighlight>
{`
<div className="flex">
    <div className="mr-2 flex-order-3 flex-order-md-2">Item 1</div>
    <div className="mr-2 flex-order-1 flex-order-md-3">Item 2</div>
    <div className="mr-2 flex-order-2 flex-order-md-1">Item 3</div>
</div>
`}
</CodeHighlight>

                <div className="flex">
                    <div className="mr-2 flex-order-3 flex-order-md-2">Item 1</div>
                    <div className="mr-2 flex-order-1 flex-order-md-3">Item 2</div>
                    <div className="mr-2 flex-order-2 flex-order-md-1">Item 3</div>
                </div>

                <h6>Order Classes</h6>
                <ul>
                    <li>flex-order-0</li>
                    <li>flex-order-1</li>
                    <li>flex-order-2</li>
                    <li>flex-order-3</li>
                    <li>flex-order-4</li>
                    <li>flex-order-5</li>
                    <li>flex-order-6</li>
                    <li>flex-order-sm-0</li>
                    <li>flex-order-sm-1</li>
                    <li>flex-order-sm-2</li>
                    <li>flex-order-sm-3</li>
                    <li>flex-order-sm-4</li>
                    <li>flex-order-sm-5</li>
                    <li>flex-order-sm-6</li>
                    <li>flex-order-md-0</li>
                    <li>flex-order-md-1</li>
                    <li>flex-order-md-2</li>
                    <li>flex-order-md-3</li>
                    <li>flex-order-md-4</li>
                    <li>flex-order-md-5</li>
                    <li>flex-order-md-6</li>
                    <li>flex-order-lg-0</li>
                    <li>flex-order-lg-1</li>
                    <li>flex-order-lg-2</li>
                    <li>flex-order-lg-3</li>
                    <li>flex-order-lg-4</li>
                    <li>flex-order-lg-5</li>
                    <li>flex-order-lg-6</li>
                    <li>flex-order-xl-0</li>
                    <li>flex-order-xl-1</li>
                    <li>flex-order-xl-2</li>
                    <li>flex-order-xl-3</li>
                    <li>flex-order-xl-4</li>
                    <li>flex-order-xl-5</li>
                    <li>flex-order-xl-6</li>
                </ul>

                <h5>Wrap</h5>
                <p>Flex wrap defines the wrap behavior when there is not enough space in the container. The format of the class is <i>{`flex-{value}`}</i> and the value field can be either of the
            listed alternatives.</p>

                <ul>
                    <li>nowrap (default)</li>
                    <li>wrap</li>
                    <li>wrap-reverse</li>
                </ul>

                <h6>No Wrap</h6>
<CodeHighlight>
{`
<div className="flex">
    <div className="mr-2 md:col-2">Item 1</div>
    <div className="mr-2 md:col-2">Item 2</div>
    <div className="mr-2 md:col-2">Item 3</div>
    <div className="mr-2 md:col-2">Item 4</div>
    <div className="mr-2 md:col-2">Item 5</div>
    <div className="mr-2 md:col-2">Item 6</div>
</div>
`}
</CodeHighlight>
                <div className="flex">
                    <div className="mr-2 md:col-2">Item 1</div>
                    <div className="mr-2 md:col-2">Item 2</div>
                    <div className="mr-2 md:col-2">Item 3</div>
                    <div className="mr-2 md:col-2">Item 4</div>
                    <div className="mr-2 md:col-2">Item 5</div>
                    <div className="mr-2 md:col-2">Item 6</div>
                </div>

                <h6>Wrap</h6>
<CodeHighlight>
{`
<div className="flex flex-wrap">
    <div className="mr-2 md:col-2">Item 1</div>
    <div className="mr-2 md:col-2">Item 2</div>
    <div className="mr-2 md:col-2">Item 3</div>
    <div className="mr-2 md:col-2">Item 4</div>
    <div className="mr-2 md:col-2">Item 5</div>
    <div className="mr-2 md:col-2">Item 6</div>
</div>
`}
</CodeHighlight>
                <div className="flex flex-wrap">
                    <div className="mr-2 md:col-2">Item 1</div>
                    <div className="mr-2 md:col-2">Item 2</div>
                    <div className="mr-2 md:col-2">Item 3</div>
                    <div className="mr-2 md:col-2">Item 4</div>
                    <div className="mr-2 md:col-2">Item 5</div>
                    <div className="mr-2 md:col-2">Item 6</div>
                </div>

                <h6>Wrap Reverse</h6>
<CodeHighlight>
{`
<div className="flex flex-wrap-reverse">
    <div className="mr-2 md:col-2">Item 1</div>
    <div className="mr-2 md:col-2">Item 2</div>
    <div className="mr-2 md:col-2">Item 3</div>
    <div className="mr-2 md:col-2">Item 4</div>
    <div className="mr-2 md:col-2">Item 5</div>
    <div className="mr-2 md:col-2">Item 6</div>
</div>
`}
</CodeHighlight>
                <div className="flex flex-wrap-reverse">
                    <div className="mr-2 md:col-2">Item 1</div>
                    <div className="mr-2 md:col-2">Item 2</div>
                    <div className="mr-2 md:col-2">Item 3</div>
                    <div className="mr-2 md:col-2">Item 4</div>
                    <div className="mr-2 md:col-2">Item 5</div>
                    <div className="mr-2 md:col-2">Item 6</div>
                </div>

                <h6>Wrap Classes</h6>
                <ul>
                    <li>flex-nowrap</li>
                    <li>flex-wrap</li>
                    <li>flex-wrap-reverse</li>
                    <li>sm:flex-nowrap</li>
                    <li>sm:flex-wrap</li>
                    <li>sm:flex-wrap-reverse</li>
                    <li>md:flex-nowrap</li>
                    <li>md:flex-wrap</li>
                    <li>md:flex-wrap-reverse</li>
                    <li>lg:flex-nowrap</li>
                    <li>lg:flex-wrap</li>
                    <li>lg:flex-wrap-reverse</li>
                    <li>xl:flex-nowrap</li>
                    <li>xl:flex-wrap</li>
                    <li>xl:flex-wrap-reverse</li>
                </ul>

                <h5>Justify Content</h5>
                <p>Justify content is the alignment along the main axis and defined using the <i>{`p-jc-{value}`}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
                <ul>
                    <li>start</li>
                    <li>end</li>
                    <li>center</li>
                    <li>between</li>
                    <li>around</li>
                    <li>evenly</li>
                </ul>

                <h6>Between</h6>
<CodeHighlight>
{`
<div className="flex justify-content-between">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
`}
</CodeHighlight>
                <div className="flex justify-content-between">
                    <div>Item 1</div>
                    <div>Item 2</div>
                </div>

                <h6>Center</h6>
<CodeHighlight>
{`
<div className="flex justify-content-center">
    <div className="mr-2">Item 1</div>
    <div>Item 2</div>
</div>
`}
</CodeHighlight>
                <div className="flex justify-content-center">
                    <div className="mr-2">Item 1</div>
                    <div>Item 2</div>
                </div>

                <h6>Justify Content Classes</h6>
                <ul>
                    <li>justify-content-start</li>
                    <li>justify-content-end</li>
                    <li>justify-content-center</li>
                    <li>justify-content-between</li>
                    <li>justify-content-around</li>
                    <li>justify-content-evenly</li>
                    <li>p-jc-sm-start</li>
                    <li>p-jc-sm-end</li>
                    <li>p-jc-sm-center</li>
                    <li>p-jc-sm-between</li>
                    <li>p-jc-sm-around</li>
                    <li>p-jc-sm-evenly</li>
                    <li>p-jc-md-start</li>
                    <li>p-jc-md-end</li>
                    <li>p-jc-md-center</li>
                    <li>p-jc-md-between</li>
                    <li>p-jc-md-around</li>
                    <li>p-jc-md-evenly</li>
                    <li>p-jc-lg-start</li>
                    <li>p-jc-lg-end</li>
                    <li>p-jc-lg-center</li>
                    <li>p-jc-lg-between</li>
                    <li>p-jc-lg-around</li>
                    <li>p-jc-lg-evenly</li>
                    <li>p-jc-xl-start</li>
                    <li>p-jc-xl-end</li>
                    <li>p-jc-xl-center</li>
                    <li>p-jc-xl-between</li>
                    <li>p-jc-xl-around</li>
                    <li>p-jc-xl-evenly</li>
                </ul>

                <h5>Align Items</h5>
                <p>Align Items configuration is the alignment along the cross axis and defined using the <i>{`p-ai-{value}`}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
                <ul>
                    <li>start</li>
                    <li>end</li>
                    <li>center</li>
                    <li>baseline</li>
                    <li>stretch (default)</li>
                </ul>

                <h6>Start</h6>
<CodeHighlight>
{`
<div className="flex align-items-start">
    <div className="mr-2" style={{height: '100px'}}>Item 1</div>
    <div style={{height: '50px'}}>Item 2</div>
</div>
`}
</CodeHighlight>
                <div className="flex align-items-start">
                    <div className="mr-2" style={{height: '100px'}}>Item 1</div>
                    <div style={{height: '50px'}}>Item 2</div>
                </div>

                <h6>Center</h6>
<CodeHighlight>
{`
<div className="flex p-ai-center">
    <div className="mr-2" style={{height: '100px'}}>Item 1</div>
    <div style={{height: '50px'}}>Item 2</div>
</div>
`}
</CodeHighlight>
                <div className="flex p-ai-center">
                    <div className="mr-2" style={{height: '100px'}}>Item 1</div>
                    <div style={{height: '50px'}}>Item 2</div>
                </div>

                <h6>Align Items Classes</h6>
                <ul>
                    <li>align-items-start</li>
                    <li>align-items-end</li>
                    <li>p-ai-center</li>
                    <li>p-ai-baseline</li>
                    <li>p-ai-strech</li>
                    <li>p-ai-sm-start</li>
                    <li>p-ai-sm-end</li>
                    <li>p-ai-sm-center</li>
                    <li>p-ai-sm-baseline</li>
                    <li>p-ai-sm-strech</li>
                    <li>p-ai-md-start</li>
                    <li>p-ai-md-end</li>
                    <li>p-ai-md-center</li>
                    <li>p-ai-md-baseline</li>
                    <li>p-ai-md-strech</li>
                    <li>p-ai-lg-start</li>
                    <li>p-ai-lg-end</li>
                    <li>p-ai-lg-center</li>
                    <li>p-ai-lg-baseline</li>
                    <li>p-ai-lg-strech</li>
                    <li>p-ai-xl-start</li>
                    <li>p-ai-xl-end</li>
                    <li>p-ai-xl-center</li>
                    <li>p-ai-xl-baseline</li>
                    <li>p-ai-xl-strech</li>
                </ul>

                <h5>Align Self</h5>
                <p>Align self configuration is the alignment along the cross axis for a particular element and defined using the <i>{`align-content-{value}`}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
                <ul>
                    <li>start</li>
                    <li>end</li>
                    <li>center</li>
                    <li>baseline</li>
                    <li>stretch (default)</li>
                </ul>

<CodeHighlight>
{`
<div className="flex" style={{height: '150px'}}>
    <div className="mr-2 align-content-start">Start</div>
    <div className="mr-2 align-content-center">Center</div>
    <div className="mr-2 align-content-end">End</div>
    <div className="mr-2 align-content-stretch">Stretch</div>
</div>
`}
</CodeHighlight>
                <div className="flex" style={{height: '150px'}}>
                    <div className="mr-2 p-as-start">Start</div>
                    <div className="mr-2 align-content-center">Center</div>
                    <div className="mr-2 align-content-end">End</div>
                    <div className="mr-2 align-content-stretch">Stretch</div>
                </div>

                <h6>Align Items Classes</h6>
                <ul>
                    <li>align-content-start</li>
                    <li>align-content-end</li>
                    <li>align-content-center</li>
                    <li>align-content-baseline</li>
                    <li>align-content-strech</li>
                    <li>align-content-sm-start</li>
                    <li>align-content-sm-end</li>
                    <li>align-content-sm-center</li>
                    <li>align-content-sm-baseline</li>
                    <li>align-content-sm-strech</li>
                    <li>align-content-md-start</li>
                    <li>align-content-md-end</li>
                    <li>align-content-md-center</li>
                    <li>align-content-md-baseline</li>
                    <li>align-content-md-strech</li>
                    <li>align-content-lg-start</li>
                    <li>align-content-lg-end</li>
                    <li>align-content-lg-center</li>
                    <li>align-content-lg-baseline</li>
                    <li>align-content-lg-strech</li>
                    <li>align-content-xl-start</li>
                    <li>align-content-xl-end</li>
                    <li>align-content-xl-center</li>
                    <li>align-content-xl-baseline</li>
                    <li>align-content-xl-strech</li>
                </ul>

                <h5>Align Content</h5>
                <p>Align content is the alignment along the cross axis and defined using the <i>{`p-ac-{value}`}</i> format with responsive alternatives. Value field accepts
            the options below.</p>
                <ul>
                    <li>start</li>
                    <li>end</li>
                    <li>center</li>
                    <li>around</li>
                    <li>stretch</li>
                    <li>between</li>
                </ul>

                <h6>Align Content Classes</h6>
                <ul>
                    <li>p-ac-start</li>
                    <li>p-ac-end</li>
                    <li>p-ac-center</li>
                    <li>p-ac-around</li>
                    <li>p-ac-stretch</li>
                    <li>p-ac-between</li>
                    <li>p-ac-sm-start</li>
                    <li>p-ac-sm-end</li>
                    <li>p-ac-sm-center</li>
                    <li>p-ac-sm-around</li>
                    <li>p-ac-sm-stretch</li>
                    <li>p-ac-sm-between</li>
                    <li>p-ac-md-start</li>
                    <li>p-ac-md-end</li>
                    <li>p-ac-md-center</li>
                    <li>p-ac-md-around</li>
                    <li>p-ac-md-stretch</li>
                    <li>p-ac-md-between</li>
                    <li>p-ac-lg-start</li>
                    <li>p-ac-lg-end</li>
                    <li>p-ac-lg-center</li>
                    <li>p-ac-lg-around</li>
                    <li>p-ac-lg-stretch</li>
                    <li>p-ac-lg-between</li>
                    <li>p-ac-xl-start</li>
                    <li>p-ac-xl-end</li>
                    <li>p-ac-xl-center</li>
                    <li>p-ac-xl-around</li>
                    <li>p-ac-xl-stretch</li>
                    <li>p-ac-xl-between</li>
                </ul>

                <h5>Margin with FlexBox</h5>
                <p>When combined with <Link to="/setup">spacing utilities</Link>, flexbox offers endless possibilities.</p>
                <h6>Horizontal Spacing</h6>

<CodeHighlight>
{`
<div className="flex p-p-3 card">
    <Button type="Button" icon="pi pi-check" className="mr-2" />
    <Button type="Button" icon="pi pi-trash" className="p-button-danger"/>
    <Button type="Button" icon="pi pi-search" className="p-ml-auto p-button-help"/>
</div>
`}
</CodeHighlight>
                <div className="flex p-p-3 card">
                    <Button type="Button" icon="pi pi-check" className="mr-2" />
                    <Button type="Button" icon="pi pi-trash" className="p-button-danger" />
                    <Button type="Button" icon="pi pi-search" className="p-ml-auto p-button-help" />
                </div>

                <h6>Vertical Spacing</h6>
<CodeHighlight>
{`
<div className="flex flex-column" style={{height: '150px'}}>
    <div>Item 1</div>
    <div className="p-mt-auto">Item 2</div>
</div>
`}
</CodeHighlight>
                <div className="flex flex-column" style={{height: '150px'}}>
                    <div>Item 1</div>
                    <div className="p-mt-auto">Item 2</div>
                </div>
            </div>
        </div>
    )
}
