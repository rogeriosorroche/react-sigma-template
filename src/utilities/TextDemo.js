import React from 'react';

export const TextDemo = () => {

    return (
        <div className="grid text-demo">
            <div className="col-12">
                <div className="card">
                    <h4>Text</h4>
                    <p>Manage the alignment and the styling of a text with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> text utilities.</p>

                    <h5>Alignment</h5>
                    <div className="md:col-3 text-left">Left</div>
                    <div className="md:col-3 text-center">Center</div>
                    <div className="md:col-3 text-right">Right</div>

                    <h5>Wrap</h5>
                    <div className="md:col-3 demo-container" style={{width: '10rem'}}>Long text wraps and does not overlow.</div>
                    <div className="md:col-3 demo-container text-nowrap" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>
                    <div className="md:col-3 demo-container text-nowrap overflow-hidden white-space-nowrap text-overflow-ellipsis" style={{width: '10rem'}}>Long text does not wrap and overflows the parent.</div>

                    <h5>Transform</h5>
                    <div className="md:col-3 lowercase">LOWERCASE</div>
                    <div className="md:col-3 uppercase">uppercase</div>
                    <div className="md:col-3 capitalize">capitalize</div>

                    <h5>Style</h5>
                    <div className="md:col-3 font-bold">Bold</div>
                    <div className="md:col-3 font-normal">Normal</div>
                    <div className="md:col-3 font-light">Light</div>
                    <div className="md:col-3 font-italic">Italic</div>
                </div>
            </div>
        </div>
    )
}
