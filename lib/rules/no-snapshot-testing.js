


const getPropertyName = ({property}) => property && property.name
const isDisallowedPropery = ({type,property}) => type !== "MemberExpression" || (property && property.type !== "Identifier");

module.exports = {
    create(context) {
        return {
            CallExpression: function(node) {
                const { callee } = node;
                const isDisallowed = isDisallowedPropery(callee);
                if (isDisallowed) {
                    return;
                }
                const name = getPropertyName(callee);
                if (name === 'toMatchSnapshot' || name === 'toMatchInlineSnapshot') {
                    context.report({
                        fix:function(fixer){
                            return[
                                fixer.remove(node)
                            ]
                        },
                        data: { name: node.callee.name },
                        messageId: 'notAllowed',
                        node,
                    });
                }
            },
        };
    },
    meta: {
        docs: {
            description: 'Snapshots have no value as tests they are disallowed.',
        },
        messages: {
            notAllowed: 'Snapshot testing is disallowed',
        },
        fixable:'code',
        schema: [],
    },
}
