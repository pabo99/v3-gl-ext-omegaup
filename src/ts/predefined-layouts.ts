import { ComponentItemConfig, ItemType, LayoutConfig } from 'golden-layout';

const source: ComponentItemConfig = {
    type: 'component',
    title: 'Main.cpp',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'MonacoEditor component' }
};

const settings: ComponentItemConfig = {
    type: 'component',
    title: 'settings',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'SettingsComponent',
    width: 10,
    componentState: {}
};

const output: ComponentItemConfig = {
    type: 'component',
    title: 'compiler.out/err',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'TextEditor component' }
};

const logs: ComponentItemConfig = {
    type: 'component',
    title: 'logs.txt',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'TextEditor component' }
};

const files: ComponentItemConfig = {
    type: 'component',
    title: 'files.zip',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'ZipViewer component' }
};

const sampleInput: ComponentItemConfig = {
    type: 'component',
    title: 'sample.in',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'TextEditor component' }
};

const sampleOutput: ComponentItemConfig = {
    type: 'component',
    title: 'sample.out',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'TextEditor component' }
};

const sampleOut: ComponentItemConfig = {
    type: 'component',
    title: 'sample.out',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'TextEditor component' }
};

const sampleErr: ComponentItemConfig = {
    type: 'component',
    title: 'sample.err',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'TextEditor component' }
};

const diff: ComponentItemConfig = {
    type: 'component',
    title: 'diff',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'MonacoDiff component' }
};

const cases: ComponentItemConfig = {
    type: 'component',
    title: 'cases/',
    header: { show: 'top', popout: false },
    isClosable: false,
    componentType: 'Content1',
    width: 10,
    componentState: { abc: 'CaseSelector component' }
};

const miniRowConfig: LayoutConfig = {
    root: {
        type: ItemType.column,
        content: [
            {
                type: ItemType.row,
                content: [
                    {
                        type: ItemType.column,
                        content: [
                            {
                                type: ItemType.stack,
                                content: [source, settings],
                                height: 8
                            },
                            {
                                type: ItemType.stack,
                                content: [output, logs, files],
                                height: 2
                            }
                        ]
                    },
                    {
                        type: ItemType.column,
                        content: [
                            {
                                type: ItemType.row,
                                content: [sampleInput, sampleOutput]
                            },
                            {
                                type: ItemType.stack,
                                content: [sampleOut, sampleErr, diff]
                            }
                        ]
                    },
                    cases
                ]
            }
        ]
    }
};

export const prefinedLayouts = {
    miniRow: miniRowConfig
};
