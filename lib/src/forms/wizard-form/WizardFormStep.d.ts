import { ReactNode } from 'react';
import { Record } from 'react-admin';
/**
 * Renders children (Inputs) or a step label according to the passed `intent` prop thanks to the React Multipass pattern
 * @see https://marmelab.com/blog/2018/10/18/react-render-context-pattern.html
 *
 * To be used as child of an <WizardForm> element.
 *
 * @param {string} basePath Optional.
 * @param {Record} record Optional.
 * @param {string} resource Optional.
 * @param {string} variant Optional.
 * @param {margin} margin Optional.
 * @param {intent} intent Optional. "step" for step inputs display or "label" for step label display
 * @param {string} label Optional. Label of the step (used inside the stepper)
 */
export declare const WizardFormStep: ({ basePath, record, resource, variant, margin, children, intent, label, }: WizardFormStepProps) => JSX.Element;
export interface WizardFormStepProps {
    children: ReactNode;
    basePath?: string;
    record?: Record;
    resource?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    margin?: 'none' | 'normal' | 'dense';
    intent?: 'step' | 'label';
    label: string;
}
//# sourceMappingURL=WizardFormStep.d.ts.map