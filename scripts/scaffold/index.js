const debug = require('debug');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const mustache = require('mustache');
const mkdirp = require('mkdirp');

const scaffoldTest = input => {
    const file = fs.readFileSync(path.resolve(__dirname, './templates/Component.spec.tsx.mustache'), 'utf8');

    const template = mustache.render(file, input);

    mkdirp(path.resolve(__dirname, `../../src/${input.componentType}s/__tests__`), () => {
        fs.writeFileSync(path.resolve(__dirname, `../../src/${input.componentType}s/__tests__/${input.componentName}.spec.tsx`), template);
        
        debug('scaffold')('Created test file');
    });
};

const scaffoldComponent = input => {
    const file = fs.readFileSync(path.resolve(__dirname, './templates/Component.tsx.mustache'), 'utf8');

    const template = mustache.render(file, input);

    mkdirp(path.resolve(__dirname, `../../src/${input.componentType}s`), () => {
        fs.writeFileSync(path.resolve(__dirname, `../../src/${input.componentType}s/${input.componentName}.tsx`), template);
        
        debug('scaffold')('Created component file');
    });
};

const scaffoldStory = input => {
    const file = fs.readFileSync(path.resolve(__dirname, './templates/Component.story.tsx.mustache'), 'utf8');
    const template = mustache.render(file, input);

    mkdirp(path.resolve(__dirname, `../../src/${input.componentType}s/__stories__`), () => {
        fs.writeFileSync(path.resolve(__dirname, `../../src/${input.componentType}s/__stories__/${input.componentName}.story.tsx`), template);
        
        debug('scaffold')('Created story file');
    });
};

const addStoryToIndex = input => {
    const indexPath = path.resolve(__dirname, `../../src/${input.componentType}s/__stories__/index.ts`);

    const file = (fs.existsSync(indexPath)) ? 
        fs.readFileSync(indexPath, 'utf8') : '';

    fs.writeFileSync(indexPath, `${file}
import './${input.componentName}.story';`);
        
    debug('scaffold')('Added story to index');
};

const scaffold = () => {
    debug('scaffold')('Starting scaffolding');

    inquirer.prompt([{
        type: 'list',
        name: 'componentType',
        message: 'What type of component is it?',
        choices: [
            'atom',
            'molecule',
            'organism',
            'template'
        ]
    }, {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?'
    }]).then(res => {
        scaffoldComponent(res);
        scaffoldTest(res);
        scaffoldStory(res);
        addStoryToIndex(res);
    });
};

if (require.main) {
    scaffold();
}