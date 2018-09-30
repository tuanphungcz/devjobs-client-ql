import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import { TextLabel, Required, Helper } from './styles';

export default class TextEditorInput extends Component {
  state = {
    value:
      (this.props.value && RichTextEditor.createValueFromString(this.props.value, 'html')) ||
      RichTextEditor.createEmptyValue(),
    stringValue: '',
  };

  // onChange: val => setFieldValue('description', val),

  handleTextOnBlur = () => this.props.onChange(this.state.stringValue);

  onChange = value => {
    const stringValue = value.toString('html');
    this.setState({ value, stringValue });
  };

  render() {
    const { name, label, required, helper, ...props } = this.props;

    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: [
        'INLINE_STYLE_BUTTONS',
        'BLOCK_TYPE_BUTTONS',
        'LINK_BUTTONS',
        'BLOCK_TYPE_DROPDOWN',
        'HISTORY_BUTTONS',
      ],
      INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Underline', style: 'UNDERLINE' },
      ],
      BLOCK_TYPE_DROPDOWN: [
        { label: 'Normal', style: 'unstyled' },
        { label: 'Heading Large', style: 'header-one' },
        { label: 'Heading Medium', style: 'header-two' },
        { label: 'Heading Small', style: 'header-three' },
      ],
      BLOCK_TYPE_BUTTONS: [
        { label: 'UL', style: 'unordered-list-item' },
        { label: 'OL', style: 'ordered-list-item' },
      ],
    };

    return (
      <div {...props}>
        <TextLabel htmlFor={name}>
          {label}
          {required ? <Required>*</Required> : false}
        </TextLabel>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          onBlur={this.handleTextOnBlur}
          toolbarConfig={toolbarConfig}
        />
        {helper ? <Helper>{helper}</Helper> : false}
      </div>
    );
  }
}
