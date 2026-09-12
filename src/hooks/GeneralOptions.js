/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import {
  AccordionItemSettingsPanel,
  AccordionSettingsPanel,
  AlertSettingsPanel,
  CardSettingsPanel,
  ColumnsSettingsPanel,
  ComparisonTableSettingsPanel,
  CoverSettingsPanel,
  CtaSettingsPanel,
  DividerSettingsPanel,
  FaqSettingsPanel,
  GridSettingsPanel,
  HeadingSettingsPanel,
  HeroSettingsPanel,
  ImageSettingsPanel,
  ListSettingsPanel,
  LogoSettingsPanel,
  PricingColumnSettingsPanel,
  QuoteSettingsPanel,
  RatingSettingsPanel,
  RowSettingsPanel,
  SectionSettingsPanel,
  SpacerSettingsPanel,
  StatSettingsPanel,
  StepsSettingsPanel,
  TabsSettingsPanel,
  TeamMemberSettingsPanel,
  TestimonialSettingsPanel,
  TextSettingsPanel,
  TimelineSettingsPanel,
  VideoSettingsPanel,
} from '../inspectors/general';

import blockOptions from '../constants/blockOptions';

export const GeneralOptions = ({ attributes, setAttributes, blockName }) => {
  const options = blockOptions[blockName].general || [];

  const panels = {
    AccordionItemSettingsPanel,
    AccordionSettingsPanel,
    AlertSettingsPanel,
    CardSettingsPanel,
    ColumnsSettingsPanel,
    ComparisonTableSettingsPanel,
    CoverSettingsPanel,
    CtaSettingsPanel,
    DividerSettingsPanel,
    FaqSettingsPanel,
    GridSettingsPanel,
    HeadingSettingsPanel,
    HeroSettingsPanel,
    ImageSettingsPanel,
    ListSettingsPanel,
    LogoSettingsPanel,
    PricingColumnSettingsPanel,
    QuoteSettingsPanel,
    RatingSettingsPanel,
    RowSettingsPanel,
    SectionSettingsPanel,
    SpacerSettingsPanel,
    StatSettingsPanel,
    StepsSettingsPanel,
    TabsSettingsPanel,
    TeamMemberSettingsPanel,
    TestimonialSettingsPanel,
    TextSettingsPanel,
    TimelineSettingsPanel,
    VideoSettingsPanel,
  };

  return (
    <>
      <div className="blockwriter-styling-section">
        {options.map((name) => {
          const Panel = panels[name];
          return Panel ? (
            <Panel
              key={name}
              attributes={attributes}
              setAttributes={setAttributes}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default GeneralOptions;
