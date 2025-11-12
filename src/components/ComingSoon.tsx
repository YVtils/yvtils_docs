import React from 'react';
import { Button, Container, Heading, IconComponent, Spacer, Text } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';

type ButtonIcon = React.ComponentProps<typeof Button>['icon'];
type IconName = React.ComponentProps<typeof IconComponent>['name'];

export interface CTA {
    label: string;
    href: string;
    icon?: ButtonIcon;
}

export interface ComingSoonProps {
    title?: string;
    description?: string;
    icon?: IconName;
    primaryCta?: CTA;
    secondaryCta?: CTA;
    className?: string;
}

/**
 * A simple, reusable placeholder for pages that are under construction.
 *
 * Usage:
 * <ComingSoon />
 * <ComingSoon title="YVtils Regions" description="Details are in progress." />
 */
const ComingSoon: React.FC<ComingSoonProps> = ({
    title = 'Coming soon',
    description = 'We are working on this page. Please check back later.',
    icon = 'Work' as IconName,
    primaryCta,
    secondaryCta,
    className,
}) => {
    return (
        <div
            className={`content content--fill ${className ?? ''}`.trim()}
        >
            <Container
                className="coming-soon"
            >
                <div className="coming-soon__icon" aria-hidden>
                    <IconComponent name={icon} size={32} />
                </div>

                <Spacer size="sm" />
                <Heading size="2xl" align="center">{title}</Heading>
                <Spacer size="xs" />
                <Text size="lg" align="center" style={{ maxWidth: 640, opacity: 0.9 }}>
                    {description}
                </Text>

                {(primaryCta || secondaryCta) && (
                    <>
                        <Spacer size="md" />
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {primaryCta && (
                                <Button
                                    icon={primaryCta.icon}
                                    iconPosition="left"
                                    onClick={() => (window.location.href = primaryCta.href)}
                                    size="lg"
                                    variant="primary"
                                >
                                    {primaryCta.label}
                                </Button>
                            )}
                            {secondaryCta && (
                                <Button
                                    icon={secondaryCta.icon}
                                    iconPosition="left"
                                    onClick={() => (window.location.href = secondaryCta.href)}
                                    size="lg"
                                    variant="secondary"
                                >
                                    {secondaryCta.label}
                                </Button>
                            )}
                        </div>
                    </>
                )}
            </Container>
        </div>
    );
};

export default ComingSoon;