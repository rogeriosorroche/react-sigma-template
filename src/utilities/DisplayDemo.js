import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const DisplayDemo = () => {

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h4>Display</h4>
                    <p>Efficiently configure the display of the component with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> display utilities.</p>

                    <h5>Inline</h5>
                    <InputText className="mr-2 inline" />
                    <InputText className="inline" />

                    <h5>Block</h5>
                    <InputText className="md:col-2 block" />
                    <InputText className="block" />

                    <h5>Visible on a Small Screen</h5>
                    <p>Resize to view.</p>
                    <Button type="button" icon="pi pi-bars" className="p-button-rounded p-d-md-none" />

                    <h5>Hidden on a Small Screen</h5>
                    <p>Resize to hide.</p>
                    <Button type="button" icon="pi pi-search" className="p-button-rounded p-button-success hidden p-d-md-inline-flex" />

                    <h5>Visible to Print, Invisible for Screen</h5>
                    <p className="hidden p-print-block">Only visible when printed.</p>

                    <h5>Visible to Screen, Invisible for Print</h5>
                    <p className="block p-print-none">Not available for printing.</p>
                </div>
            </div>
        </div>
    )
}
