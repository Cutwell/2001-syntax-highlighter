var Python = {
    //  built-in objects
    "(True|False|None|self)": "deeporange",

    //  built-in attributes
    "(__builtin__|__dict__|__methods__|__members__|__class__|__bases__|__import__|__name__|__doc__|__self__|__debug__)": "deepred",

    //  built-in functions
    "\\b(abs|append|apply|buffer|callable|chr|clear|close|closed|cmp|coerce|compile|complex|conjugate|copy|count|delattr|dir|divmod|eval|execfile|extend|fileno|filter|float|flush|get|getattr|globals|has_key|hasattr|hash|hex|id|index|input|insert|int|intern|isatty|isinstance|issubclass|items|keys|len|list|locals|long|map|max|min|mode|name|oct|open|ord|pop|pow|range|raw_input|read|readline|readlines|reduce|reload|remove|repr|reverse|round|seek|setattr|slice|softspace|sort|str|tell|truncate|tuple|type|unichr|unicode|update|values|vars|write|writelines|xrange|zip)":"seablue",

    //  special method names
    "(__abs__|__add__|__and__|__call__|__cmp__|__coerce__|__complex__|__concat__|__contains__|__del__|__delattr__|__delitem__|__delslice__|__div__|__divmod__|__float__|__getattr__|__getitem__|__getslice__|__hash__|__hex__|__init__|__int__|__inv__|__invert__|__len__|__long__|__lshift__|__mod__|__mul__|__neg__|__nonzero__|__oct__|__or__|__pos__|__pow__|__radd__|__rand__|__rcmp__|__rdiv__|__rdivmod__|__repeat__|__repr__|__rlshift__|__rmod__|__rmul__|__ror__|__rpow__|__rrshift__|__rshift__|__rsub__|__rxor__|__setattr__|__setitem__|__setslice__|__str__|__sub__|__xor__)": "seablue",

    //  exception classes
    "\b(Exception|StandardError|ArithmeticError|LookupError|EnvironmentError|AssertionError|AttributeError|EOFError|FloatingPointError|IOError|ImportError|IndexError|KeyError|KeyboardInterrupt|MemoryError|NameError|NotImplementedError|OSError|OverflowError|RuntimeError|SyntaxError|SystemError|SystemExit|TypeError|UnboundLocalError|UnicodeError|ValueError|WindowsError|ZeroDivisionError)\b": "seablue",

    //  types
    //"(NoneType|TypeType|IntType|LongType|FloatType|ComplexType|StringType|UnicodeType|BufferType|TupleType|ListType|DictType|FunctionType|LambdaType|CodeType|ClassType|UnboundMethodType|InstanceType|MethodType|BuiltinFunctionType|BuiltinMethodType|ModuleType|FileType|XRangeType|TracebackType|FrameType|SliceType|EllipsisType)": "",

    //  definitions
    "\b(def )[a-zA-Z_0-9]+\b": "deeporange",

    //  keywords
    "\b(and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|map|not|or|pass|print|raise|return|try|with|while|yield)\b": "deeporange",

    //  decorators
    "\b(@[a-zA-Z_0-9]+)\b": "lightblue",

    //  operators
    //"(\[|\.|:|;|,|\+|\*|\||=|!|\\|%|@|]|<|>|\/|-|&)": "",

    //  parentheses
    //"(\(|\)|{|}|\[|\])": "",

    //  numbers
    "\b(\d)\b": "deeporange",

    //  strings
    "(\"[^\"]+\")": "green",

    //  comments
    "(#.*)": "grey",

    //  block comments
    "(\"\"\"[^\"]+\"\"\"|\'\'\'[^\']+\'\'\')": "green",
}