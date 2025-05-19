
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ServiceRequestFormFields = ({ fields, formData, handleChange, handleSelectChange }) => {
  return fields.map((field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name],
      required: field.required,
    };

    if (field.type === 'select') {
      return (
        <div key={field.name} className={field.colSpan || 'md:col-span-1'}>
          <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </Label>
          <Select
            onValueChange={(value) => handleSelectChange(field.name, value)}
            value={formData[field.name]}
            required={field.required}
          >
            <SelectTrigger id={field.name}>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    if (field.type === 'textarea') {
      return (
        <div key={field.name} className={field.colSpan || 'md:col-span-2'}>
          <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </Label>
          <Textarea
            {...commonProps}
            placeholder={field.placeholder}
            onChange={handleChange}
            rows={4}
            className="resize-none"
          />
        </div>
      );
    }

    return (
      <div key={field.name} className={field.colSpan || 'md:col-span-1'}>
        <Label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
          {field.label}
        </Label>
        <Input
          {...commonProps}
          type={field.type}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </div>
    );
  });
};

export default ServiceRequestFormFields;
