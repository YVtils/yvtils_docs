import React from 'react';
import { useTranslation } from 'react-i18next';
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
    useTranslations?: boolean;
}

/**
 * A simple, reusable placeholder for pages that are under construction.
 *
 * Usage:
 * <ComingSoon />
 * <ComingSoon title="YVtils Regions" description="Details are in progress." />
 */
const ComingSoon: React.FC<ComingSoonProps> = ({
    title,
    description,
    icon = 'Work' as IconName,
    primaryCta,
    secondaryCta,
    className,
    useTranslations = true,
}) => {
    const { t } = useTranslation('pages');

    // Use translations if enabled and no custom values provided
    const displayTitle = title || (useTranslations ? t('comingSoon.title') : 'Coming soon');
    const displayDescription = description || (useTranslations ? t('comingSoon.description') : 'We are working on this page. Please check back later.');
    const displayPrimaryCta = primaryCta || (useTranslations ? {
        label: t('comingSoon.button'),
        href: '/',
        icon: 'Home' as ButtonIcon
    } : undefined);

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
                <Heading size="2xl" align="center">{displayTitle}</Heading>
                <Spacer size="xs" />
                <Text size="lg" align="center" style={{ maxWidth: 640, opacity: 0.9 }}>
                    {displayDescription}
                </Text>

                {(displayPrimaryCta || secondaryCta) && (
                    <>
                        <Spacer size="md" />
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {displayPrimaryCta && (
                                <Button
                                    icon={displayPrimaryCta.icon}
                                    iconPosition="left"
                                    onClick={() => (window.location.href = displayPrimaryCta.href)}
                                    size="lg"
                                    variant="primary"
                                >
                                    {displayPrimaryCta.label}
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