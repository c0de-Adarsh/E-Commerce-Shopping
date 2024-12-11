import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from '@radix-ui/react-select';
import React from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

function Form({ formControls, formData, setFormData, onSubmit, buttonText }) {

    function renderInputByComponentType(getControlItem) {
        let element = null;
        const value = formData[getControlItem.name] || '';
        switch (getControlItem.componentType) {
            case 'value':
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                );
                break;
            case 'select':
                element = (
                    <Select onValueChange={(value) => setFormData({
                        ...formData,
                        [getControlItem.name]: value
                    })} value={value}>
                        <SelectGroup>
                            <Label>{getControlItem.label}</Label>
                            <SelectTrigger className='w-full'>
                                <SelectValue placeholder={getControlItem.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {getControlItem.options && getControlItem.options.length > 0
                                    ? getControlItem.options.map(optionItem =>
                                        <SelectItem key={optionItem.id} value={optionItem.id}>
                                            {optionItem.label}
                                        </SelectItem>
                                    )
                                    : null}
                            </SelectContent>
                        </SelectGroup>
                    </Select>
                );
                break;
            case 'textarea':
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                );
                break;
            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                );
                break;
        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='flex flex-col gap-3'>
                {formControls.map((item) => (
                    <div className='grid w-full gap-1.5' key={item.name}>
                        {renderInputByComponentType(item)}
                    </div>
                ))}
            </div>
            <Button className='mt-2 w-full' type='submit'>{buttonText || 'Submit'}</Button>
        </form>
    );
}

export default Form;