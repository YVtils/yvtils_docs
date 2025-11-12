import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import { Button, Text, Select } from '@yvtils/designsystem';
import type { SelectOption } from '@yvtils/designsystem';
import '@yvtils/designsystem/styles';
import './CodeWindow.css';

interface CodeSnippet {
    code: string;
    language: string;
    label?: string;
}

interface CodeWindowProps {
    // Single language mode
    code?: string;
    language?: string;

    // Multi-language mode
    snippets?: CodeSnippet[];

    // Common props
    title?: string;
    showLineNumbers?: boolean;
    maxHeight?: string;
    useDropdown?: boolean; // Toggle between tabs and dropdown for multi-language
}

const CodeWindow: React.FC<CodeWindowProps> = ({
    code,
    language,
    snippets,
    title,
    showLineNumbers = false,
    maxHeight = '500px',
    useDropdown = false,
}) => {
    const codeRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState(0);

    // Determine if we're in multi-language mode
    const isMultiLanguage = snippets && snippets.length > 0;
    const useSelectMenu = useDropdown && isMultiLanguage;

    // Get current code and language
    const currentSnippet = isMultiLanguage
        ? snippets[activeTab]
        : { code: code || '', language: language || 'text', label: language };

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [currentSnippet.code, currentSnippet.language, activeTab]);

    const lines = currentSnippet.code.split('\n');

    // Get language display name
    const getLanguageLabel = (lang: string): string => {
        const labelMap: Record<string, string> = {
            typescript: 'TypeScript',
            javascript: 'JavaScript',
            tsx: 'TSX',
            jsx: 'JSX',
            json: 'JSON',
            yaml: 'YAML',
            yml: 'YAML',
            markdown: 'Markdown',
            css: 'CSS',
            bash: 'Bash',
            sh: 'Shell',
            python: 'Python',
            py: 'Python',
            java: 'Java',
            html: 'HTML'
        };
        return labelMap[lang.toLowerCase()] || lang.toUpperCase();
    };

    // Convert snippets to SelectOption format
    const selectOptions: SelectOption[] = isMultiLanguage
        ? snippets.map((snippet, index) => ({
            value: index.toString(),
            label: snippet.label || getLanguageLabel(snippet.language)
        }))
        : [];

    // Handle select change
    const handleSelectChange = (value: string) => {
        setActiveTab(parseInt(value, 10));
    };

    return (
        <div className="code-window">
            {/* Header with title and language tabs */}
            <div className="code-window-header">
                {title && (
                    <Text size="sm" weight="medium" className="code-window-title-text">
                        {title}
                    </Text>
                )}
                {isMultiLanguage && (
                    useSelectMenu ? (
                        <Select
                            options={selectOptions}
                            value={activeTab.toString()}
                            onChange={handleSelectChange}
                            size="sm"
                            variant="outline"
                            className="language-select"
                        />
                    ) : (
                        <div className="language-tabs">
                            {snippets.map((snippet, index) => (
                                <Button
                                    key={index}
                                    variant={activeTab === index ? 'primary' : 'secondary'}
                                    size="sm"
                                    onClick={() => setActiveTab(index)}
                                    className="language-tab-button"
                                >
                                    {snippet.label || getLanguageLabel(snippet.language)}
                                </Button>
                            ))}
                        </div>
                    )
                )}
                {!isMultiLanguage && (
                    <Button
                        variant="secondary"
                        size="sm"
                        disabled
                        className="language-badge-button"
                    >
                        {getLanguageLabel(currentSnippet.language)}
                    </Button>
                )}
            </div>

            {/* Code Display Area */}
            <div className="code-window-content" style={{ maxHeight }}>
                <div className="code-display">
                    {showLineNumbers && (
                        <div className="line-numbers">
                            {lines.map((_, index) => (
                                <div key={index} className="line-number">
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    )}
                    <pre className="code-pre">
                        <code ref={codeRef} className={`language-${currentSnippet.language}`}>
                            {currentSnippet.code}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodeWindow;
