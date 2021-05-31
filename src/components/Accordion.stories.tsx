import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

const GetCategory = (categotyName: string) => ({
    table: {
        category: categotyName
    }
})

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategory('Color')
        },
        collapsed: {
            ...GetCategory('Main')
        },
        titleValue: {
            ...GetCategory('Main')
        },
        onChange: {
            ...GetCategory('Event')
        }
    }
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callback = action('on or off clicked')
const callbackOnClick = action('some item was clicked')

const callbackProps = {
    onChange: callback,
    onClick: callbackOnClick
}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbackProps,
    collapsed: true,
    titleValue: 'Menu',
    items: [],
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    ...callbackProps,
    collapsed: false,
    titleValue: 'Users',
    items: [{title: 'Jeka', value: 1}, {title: 'Dymich', value: 2}, {title: 'Katerina', value: 3}]
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        onClick={(id) => {alert(`User with ID ${id} should be happy`)}}
        collapsed={value}
        onChange={() => setValue(!value)}
        titleValue={'Users'}
        items={[{title: 'Jeka', value: 1}, {title: 'Dymich', value: 2}, {title: 'Katerina', value: 3}]}/>
}
