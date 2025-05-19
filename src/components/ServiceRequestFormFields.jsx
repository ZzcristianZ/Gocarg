
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function ServiceRequestFormFields({ fields, formData, handleChange, handleSelectChange }) {
  return (
    <>
      {fields.map(field => {
        const { id, name, label, type, placeholder, component: Component, icon: Icon, required, options, rows, colSpan } = field;
        
        return (
          <div key={id} className={`space-y-2 ${colSpan || 'md:col-span-1'}`}>
            <Label htmlFor={id} className="flex items-center">
              {Icon && <Icon className="h-4 w-4 mr-1 text-primary" />} {label}
            </Label>
            {Component === Select ? (
              <Select 
                onValueChange={(value) => handleSelectChange(name, value)}
                value={formData[name]}
                required={required}
              >
                <SelectTrigger id={id}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map(option => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : Component === Textarea ? (
              <Textarea 
                id={id} 
                name={name} 
                value={formData[name]} 
                onChange={handleChange} 
                placeholder={placeholder} 
                rows={rows} 
                required={required}
              />
            ) : (
              <Input 
                id={id} 
                name={name} 
                type={type || 'text'} 
                value={formData[name]} 
                onChange={handleChange} 
                placeholder={placeholder} 
                required={required}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default ServiceRequestFormFields;
