import * as React from 'react';
import { SwatchColorPickerPage } from 'office-ui-fabric-react/lib/components/SwatchColorPicker/SwatchColorPickerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';

export class SwatchColorPickerComponentPage extends React.Component<any, any> {
  public render() {
    return (
      <div ref='pageElement'>
        <ComponentPage>
          <PageHeader pageTitle='SwatchColorPicker' backgroundColor='#038387'
            links={
              [
                {
                  'text': 'Overview',
                  'location': 'Overview'
                },
                {
                  'text': 'Variants',
                  'location': 'Variants'
                },
                {
                  'text': 'Implementation',
                  'location': 'Implementation'
                }
              ]
            } />
          <SwatchColorPickerPage isHeaderVisible={ false } />
        </ComponentPage>
      </div>
    );
  }
}