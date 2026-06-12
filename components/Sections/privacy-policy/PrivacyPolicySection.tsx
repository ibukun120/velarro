import React from 'react';
import Container from "@/components/Layouts/Container";
import { privacyPolicyData, PolicyElement } from './privacyPolicyData';

export default function PrivacyPolicySection() {
  const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-5xl font-normal mt-7 md:mt-12 mb-4 md:mb-6 text-neutral-13 leading-8">
      {children}
    </h2>
  );

  const SubHeader = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl md:text-2xl font-light mt-3 md:mt-6 mb-2 md:mb-3 text-neutral-13 leading-8.75 tracking-tight">
      {children}
    </h3>
  );

  const Paragraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`text-md md:text-lg font-light text-neutral-11/80 leading-6.5 tracking-tight ${className}`}>
      {children}
    </p>
  );

  const UnorderedList = ({ items }: { items: string[] }) => (
    <ul className="list-disc pl-5 md:pl-6 text-md md:text-lg font-light text-neutral-11/80 space-y-0.5 md:space-y-1 mt-1 mb-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );

  const renderElement = (element: PolicyElement, index: number) => {
    switch (element.type) {
      case 'subheading':
        return <SubHeader key={index}>{element.content}</SubHeader>;
      case 'paragraph':
        return (
          <Paragraph key={index} className={element.className}>
            {element.content}
          </Paragraph>
        );
      case 'list':
        return <UnorderedList key={index} items={element.items} />;
      case 'custom':
        return <React.Fragment key={index}>{element.content}</React.Fragment>;
      default:
        return null;
    }
  };

  return (
    <Container className="w-full pt-0! pb-20 md:pb-32">
      <div>
        {privacyPolicyData.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            <SectionHeader>{section.title}</SectionHeader>
            {section.elements.map((element, elementIdx) => 
              renderElement(element, elementIdx)
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
